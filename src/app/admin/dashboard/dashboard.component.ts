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
      lable: 'Total employees',
      count: 200,
      icon: 'groups',
      url:'admin/employee/list'
    },
    {
      lable: 'Total present employees',
      count: 100,
      icon: 'groups',
      url:'',
    },
    {
      lable: 'Employees activity',
      count: '',
      icon: 'hub',
      url:'',

    },
    {
      lable: 'Total leaves request',
      count: 200,
      icon: 'delete',
      url:'',
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
