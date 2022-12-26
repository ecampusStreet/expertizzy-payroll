import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { UtilsService } from 'src/app/core';

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
  permissions :any;
  constructor( private utils : UtilsService
  ) { }

  async ngOnInit() {
    this.selectedParentMenu = this.list[0].name;
    this.permissions =  await this.utils.getPermission();
    this.permissionCheck();
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

  permissionCheck(){
    this.list.forEach((element:any) => {
      if(this.permissions[element.permissionKey]){
        element.permissions =this.permissions[element.permissionKey]
      }
    });
  }
}