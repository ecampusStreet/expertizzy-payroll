import { Component } from '@angular/core';
import { userMenu } from '../core';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // title = 'expertizy';

  expand = true;
  toggle(){
    this.expand = !this.expand;
  }

  lists =userMenu;
  // lists = [
    
  //   {
  //     name:'dashboard',
  //     icon:'dashboard',
  //     routeLink:"dashboard"
  //   },
  //   // {
  //   //   name:'home',
  //   //   icon:'fa-solid fa-phone',
  //   //   routeLink:"home"
  //   // },
  //   {
  //     name:'Leave',
  //     icon:'',
  //     routeLink:'leave'
  //   },
  //   {
  //     name:'attendenceHistory',
  //     icon:'summarize',
  //     routeLink:'attendence'
  //   },
  //   {
  //     name:'userlist',
  //     icon:'list_alt',
  //     routeLink:'collegues'
  //   },
  //   {
  //     name:'allFeeds',
  //     icon:'dynamic_feed',
  //     routeLink:'all-feeds'
  //   },

  
  // ];
  constructor() {}
}