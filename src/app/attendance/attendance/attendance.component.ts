import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from 'rxjs';
import {
  ApiService,
  CurrentUserService,
  ToastService,
  urls,
} from 'src/app/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent implements OnInit {
  signIn: boolean = true;
  buttonLabel = 'SignIn';
  today = new Date();
  emplID: any;
  constructor(
   
    private apiService: ApiService,
    private tostService: ToastService,
    private userService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.getUserId();
    
  }

  
  getUserId() {
    this.userService.getUser().then((resp) => {
      this.emplID = resp.employee._id;
    });
  }
  action() {
    this.buttonLabel = 'SignOut';
    const config = {
      url: urls.attendance.create + this.emplID,
      payload: {
        date: new Date(),
        timeIn: '09:30am',
        timeOut: '06:30pm',
        location: 'bangalore',
        isPresent:true,
      },
    };
    this.apiService.post(config).subscribe((resp) => {
      if (resp) {
        this.tostService.success(resp.message);
        
      }
    });
  }
}
