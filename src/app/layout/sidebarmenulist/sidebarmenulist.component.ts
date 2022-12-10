import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebarmenulist',
  templateUrl: './sidebarmenulist.component.html',
  styleUrls: ['./sidebarmenulist.component.scss']
})
export class SidebarmenulistComponent implements OnInit {

  selectedParentMenu :any;
  selectedChildMenu : any;
  @Input() expand :boolean = true;
  @Output() toggle = new EventEmitter();
  @Input() list: any;
  
  constructor(
  ) { }

  ngOnInit(): void {
    this.selectedParentMenu = this.list[0].name;

  }
  activateChildMenu(item:any){
    this.selectedChildMenu = item.name;
  }
  activateParentMenu(item:any){
    this.selectedParentMenu = item.name;
    this.selectedChildMenu = '';
  }
  toggleBtn(){
   this.toggle.emit();
  }

}
