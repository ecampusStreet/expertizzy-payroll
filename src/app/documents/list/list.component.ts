import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns=['Lettertype', 'actions']
  letterList=[];
  id: any;
  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,

  ) { 

    routerParams.queryParams.subscribe((params: any) => {
      if (params) {
        this.id = params.id;
      }
    });
  }

  ngOnInit(): void {
    alert(this.id)
  }

  action(data:any, action:any ){

  }
  add(){
    this.router.navigate(['expertizzy/document/addletter'])
  }
}
