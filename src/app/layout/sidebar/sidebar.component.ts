import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

@Input() expand :boolean = true;
 
  list=[
    {
      name:'Dashboard',
      icon:' fa-solid fa-house',
      routeLink:"dashboard"    
    },
    {
      name:'Employees',
      icon:'fa-solid fa-people-group',
      routeLink:"employees"
    },
    {
      name:'about',
      icon:'fa-solid fa-circle-info',
    },
    {
      name:'contact',
      icon:'fa-solid fa-phone'
    },
    {
      name:'setting',
      icon:'fa-solid fa-gear'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

  
}
