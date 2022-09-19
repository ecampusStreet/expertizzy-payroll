import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {
@Input() titles: any
@Input() lists:any

 

  constructor() { }

  ngOnInit(): void {
    
  } 

}
