import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService, ToastService, UtilsService, urls } from 'src/app/core';
import { FilterFormComponent } from 'src/app/core/components/filter-form/filter-form.component';

@Component({
  selector: 'app-manage-attendance',
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.scss'],
})
export class ManageAttendanceComponent implements OnInit {
  isPresent: boolean = false;
  limit=25;
  page =1;
  searchText: any = '';
  filtersLength =0;

  filters:any = {
    department: '',
    designation: '',
    doj: '',
    gender: '',
    branch: '',
    financialyear: '',
    experience: '',
    status:'active',

  };

  displayedColumns: string[] = [
    'profile_photo',
    'id',
    'name',
    'mobile',
    'designation',
    'department',
    'status',
    'actions',
  ];
  today = new Date();
  
  employees:any = [];
  constructor(private matdialog: MatDialog,
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router,
    private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.handleAdmDateChange();
  }

  add() {}
  search() {}



  handleAdmDateChange(){
    console.log(moment(this.today).format('MM/DD/YYYY'),"ssdfsf");
    const config = {
          url: urls.attendance.create +'?limit=' +
          this.limit +
          '&page=' +
          this.page +
          '&search=' +
          this.searchText +
          '&department=' +
          this.filters.department +
          '&designation=' +
          this.filters.designation +
          '&doj=' +
          this.filters.doj +
          '&gender=' +
          this.filters.gender +
          '&branch=' +
          this.filters.branch +
          '&financialyear=' +
          this.filters.financialyear +
          '&status=' +
          this.filters.status +
          '&experience=' +
          this.filters.experience,
          payload: {
            date:moment(this.today).format('YYYY-MM-DD'),
          },
        };
        this.apiService.post(config).subscribe((resp) => {
          console.log(resp,'response')
          if (resp) {
            this.toastService.success(resp.message);
            this.employees=resp.data;
            console.log(this.employees,'emp atta list')
            if(this.employees == 0){
            this.toastService.error("No attendance list found");
            }
          }
          
        });
  } 
  
  updateAttendance(employee: any) {
    employee.swipes.push(new Date());
    const config = {
      url: urls.attendance.update + employee._id,
      payload: {
        isPresent:employee.isPresent,
        swpipes:employee.swipes
      },
    };
    this.apiService.put(config).subscribe((resp) =>{
      if(resp){
        this.toastService.success(resp.message);
      }
    })
  }


 
  openPopup() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matdialog.open(FilterFormComponent, {
      width: '60%',
      data: this.filters,

    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.filters.department = result.department ? result.department : '';
        this.filters.designation = result.designation ? result.designation : '';
        this.filters.doj = result.doj ? result.doj : '';
        this.filters.gender = result.gender ? result.gender : '';
        this.filters.branch = result.branch ? result.branch : '';
        this.filters.financialyear = result.financialyear ? result.financialyear: ''  
        this.filters.experience = result.experience ? result.experience : '';
        this.filters.status = result.status ? result.status:'';
        this.filters = result;
        this.getFilterLength();
        this.handleAdmDateChange();
        this.employees = [];
      }
    });
  }

  getFilterLength():any{
    this.filtersLength =0;
    Object.keys(this.filters).forEach(key => {
      if (this.filters[key]) {
        this.filtersLength =  this.filtersLength +1;
      }
    });
  }
}
