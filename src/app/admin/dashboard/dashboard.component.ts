import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminDashboard } from 'src/app/core';

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
     
      
  cardData =adminDashboard;
  
  ngOnInit(): void {}

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
  }
  onSelect(card:any){
    this.router.navigate([card.url]);
  }
}
