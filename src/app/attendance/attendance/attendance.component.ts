import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from 'rxjs';
import * as moment from 'moment';

import {
  ApiService,
  CurrentUserService,
  ToastService,
  urls,
  UtilsService,
} from 'src/app/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  buttonLabel = 'SignIn';
  today = moment(new Date()).format('YYYY-MM-DD')
  emplID: any;
  todayAttendance : any ={};
  permissions: any;
  constructor(
   
    private apiService: ApiService,
    private toastService: ToastService,
    private userService: CurrentUserService,
    private utilsService: UtilsService,

  ) {}

 
  async ngOnInit(){
    this.getTodayAttendance() ;

    this.permissions =  await this.utilsService.getPermission();
    this.permissionCheck();

  }

  getTodayAttendance() {
    const config = {
      url: urls.attendance.entry + this.today,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.todayAttendance =resp.data;
        if(this.todayAttendance.swipes && this.todayAttendance.swipes.length ){
      this.buttonLabel =   this.todayAttendance.swipes.length % 2  ? 'SignOut' : 'Sign in';   
        }
      }
      else{
        this.toastService.error(resp.message);
      }
    });
  }

  action(data: any) {
    // data.isPresent = data.isPresent ? false : true;
    this.todayAttendance.swipes.push(new Date());
    console.log( this.todayAttendance," this.todayAttendance");
    const config = {
      url: urls.attendance.update + data._id,
      payload: {
        isPresent:  data.isPresent = !data.isPresent ,
        swipes: this.todayAttendance.swipes
      },
    };
    this.apiService.put(config).subscribe((resp) =>{
      if(resp){
        this.toastService.success(resp.message);
        this.getTodayAttendance();
      }
    })
  }

  permissionCheck(){
    if(this.permissions['employee']){
      this.permissions =this.permissions['employee'];
      console.log(this.permissions,'bdhfsdhf')
    }
}
}
