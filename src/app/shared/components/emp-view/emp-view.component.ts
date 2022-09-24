import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.scss']
})
export class EmpViewComponent implements OnInit {

  panelOpenState = false;

  emp: any;
  emplID:any;

  

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.snapshot.paramMap
  }

}
