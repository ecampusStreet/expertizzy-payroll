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

  filters = {
    department: '',
    designation: '',
    doj: '',
    gender: '',
    branch: '',
    financialyear: '',
    experience: '',
  };

  displayedColumns: string[] = [
    'profile_photo',
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
          }
        });
  }
 
  openPopup() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matdialog.open(FilterFormComponent, {
      width: '60%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
