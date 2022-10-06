import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router : Router
  ) {}
  breakpoint: number | undefined;
  cardData = [
    {
      lable: 'Total Employees',
      count: 200,
      icon: 'groups',
      url:'admin/employees'
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
  onSelect(card:any){
    this.router.navigate([card.url]);
  }
}
