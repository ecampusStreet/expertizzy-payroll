import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilsService } from 'src/app/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent {
  @Input() list:any;
  @Output() eventAction = new EventEmitter
  displayedColumns: string[] = ['profile_photo', 'name','mobile', 'designation', 'department','actions'];

  constructor(private utilService :UtilsService){

  }
/** Whether the number of selected elements matches the total number of rows. */


action(data:any,type : any){
  let payload ={
    data:data,
    action:type
  }
this.eventAction.emit(payload);
}
}
