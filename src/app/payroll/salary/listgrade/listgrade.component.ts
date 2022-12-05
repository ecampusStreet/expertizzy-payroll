import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listgrade',
  templateUrl: './listgrade.component.html',
  styleUrls: ['./listgrade.component.scss']
})
export class ListgradeComponent implements OnInit {
searchText='';
gradeList = [];
displayedColumns =['grade','from', 'to', 'actions'];
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
add(){
  this.router.navigate(['/expertizzy/payroll/add']);
}
search(){

}
action(data:any, action:any){

}
}
