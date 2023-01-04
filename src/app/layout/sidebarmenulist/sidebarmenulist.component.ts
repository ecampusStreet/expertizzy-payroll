import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core';
import { PermissionService } from 'src/app/services/permission.service';

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
  constructor( private utils : UtilsService,
    private router: Router,
    private permissionService : PermissionService

  ) { 
    permissionService.subject.subscribe(data =>{
    this.initializeThePermission();
    })
  }

  async ngOnInit() {
    this.selectedParentMenu = this.list[0].name;
   this.initializeThePermission();
  }

  async initializeThePermission(){
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

  permission(child:any,item:any){
   this.router.navigate(['expertizzy/' + child]);
  }
}