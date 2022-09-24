import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {
// @Input() titles: any
@Input() lists:any
@Output() view = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
    
  } 

  onClick(list:any){
    console.log("this is working");
    this.view.emit(list);
  }

}
