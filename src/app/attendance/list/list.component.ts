import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, CurrentUserService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employeesList:any=[];
  searchText:string='';
  displayedColumns: string[] = [
    'date',
    'status',
  ];
  empID: any;
  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private userService: CurrentUserService
    ) { }

  ngOnInit(): void {
    this.getEmpId() ;
  }

  search(){

  }

  getEmpId() {
    this.userService.getUser().then((resp) => {
      this.empID = resp.employee._id;
      this.getAttendanceHistory();
    });
  }

  getAttendanceHistory(){
    const config ={
      url:urls.attendance.empList + this.empID,
    };
    this.apiService.get(config).subscribe((resp)=>{
      console.log(resp.data, 'getList');
      if(resp){
        this.toastService.success(resp.message);
        this.employeesList =resp.data;
        console.log( this.employeesList," this.employeesList")
      }
    })
  }
}
