import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent {
  @Input() list:any;
  @Output() eventAction = new EventEmitter
  displayedColumns: string[] = ['profile_photo','empId', 'name','mobile', 'designation', 'department','actions'];

/** Whether the number of selected elements matches the total number of rows. */
action(data:any,type : any){
  let payload ={
    data:data,
    action:type
  }
this.eventAction.emit(payload);
}
}
