import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, urls } from 'src/app/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  cardData :any=[];
  constructor(
    private router : Router,
    private apiService : ApiService
  ) { }

  ngOnInit(): void {
    this.getEmployeeOverView();
  }
  onSelect(card:any){
    this.router.navigate([card.url],{queryParams:card.paramQuery});
  }
  getEmployeeOverView(){
    const config ={
      url : urls.employee.overview
    }
    this.apiService.get(config).subscribe(resp =>{
      if(resp.success){
        this.cardData = resp.result;
      }
    })
  }
}
