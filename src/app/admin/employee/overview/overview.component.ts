import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeOverview } from 'src/app/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  cardData =employeeOverview;
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  onSelect(card:any){
    this.router.navigate([card.url],{queryParams:card.paramQuery});
  }
}
