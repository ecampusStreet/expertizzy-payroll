import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'expertizy';
  expand = true;
  toggle(){
    this.expand = !this.expand;
  }
  
  lists = [
    {
      name:'Dashboard',
      icon:' dashboard',
      routeLink:"dashboard"    
    },
    {
      name:'Employees',
      icon:'fa-solid fa-people-group',
      routeLink:"employees"
    },
    {
      name:'Employees-List',
      icon:'fa-solid fa-people-group',
      routeLink:"employee-list"
    },
   
    // {
    //   name:'setting',
    //   icon:'fa-solid fa-gear'
    // },
  
  ];
}
