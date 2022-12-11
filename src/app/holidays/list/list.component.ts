import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  searchText='';
  holidaysList=[];
  displayedColumns=['onThisDay','description','fromDate','toDate','actions'];
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  add(){
    this.router.navigate(['expertizzy/holiday/addHoliday']);
  }
  search(){

  }

  action(data:any, action:any){

  }
}
