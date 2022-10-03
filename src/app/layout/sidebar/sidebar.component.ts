import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // @Input() expand :boolean = true;

  
 lists = [
  

];
  constructor() { }

  ngOnInit(): void {
    console.log(this.lists + "");
  }

  
}
