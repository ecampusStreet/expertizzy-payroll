import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
 usercardData=[
  {
    lable: ' Today Attendence',
    count: 200,
    icon: 'groups',
    url:'/admin/employee-list'
  },
  {
    lable: 'My Leaves',
    count: 100,
    icon: 'groups',
    url:'/user/home',
  },
  {
    lable: 'Salary Slips',
    count: '',
    icon: 'hub',
    url:'',

  },
  {
    lable: 'Documents',
    count: 200,
    icon: 'delete',
    url:'',
  },

 ];
  constructor() { }

  ngOnInit(): void {
  }

}
