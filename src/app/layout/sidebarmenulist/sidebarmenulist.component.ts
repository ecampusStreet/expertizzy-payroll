import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarmenulist',
  templateUrl: './sidebarmenulist.component.html',
  styleUrls: ['./sidebarmenulist.component.scss']
})
export class SidebarmenulistComponent implements OnInit {


  @Input() expand :boolean = true;
  
  @Input() list: any;
  
  constructor() { }

  ngOnInit(): void {
    

  }
  activateMenu(item:any){
    this.list.forEach((element:any) => {
        element.clicked = false;
    });
    item.clicked = true;
  }

}
