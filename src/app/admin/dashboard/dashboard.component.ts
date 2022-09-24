import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  breakpoint: number | undefined;
  cardData = [
    {
      lable: 'Total Employees',
      count: 200,
      icon: 'groups',
    },
    {
      lable: 'Total Present Employees',
      count: 100,
      icon: 'groups',
    },
    {
      lable: 'Employees Activity',
      count: '',
      icon: 'hub',
    },
    {
      lable: 'Total Employees',
      count: 200,
      icon: 'delete',
    },
  ];
  ngOnInit(): void {}

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
  }
}
