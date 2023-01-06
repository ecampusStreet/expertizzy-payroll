import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilsService } from 'src/app/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {
  isPresent: boolean = true;
  @Input() permission:any;
  @Input() list:any;
  @Output() eventAction = new EventEmitter;
  @Output() eventActions = new EventEmitter

  displayedColumns: string[] = ['profile_photo','id', 'name','mobile', 'designation', 'department','status'];

  constructor(private utilService :UtilsService){

  }
/** Whether the number of selected elements matches the total number of rows. */

ngOnInit(): void {
  if(this.permission?.manage || this.permission?.delete  || this.permission?.update){
    this.displayedColumns.push('actions')
  }
}

action(data:any,type : any){
  let payload ={
    data:data,
    action:type
  }
this.eventAction.emit(payload);
}


}
