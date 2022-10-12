import { Component, OnInit } from '@angular/core';
import { userDashboard } from 'src/app/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  
 usercardData=userDashboard;
 
  constructor() { }

  ngOnInit(): void {
  }

}
