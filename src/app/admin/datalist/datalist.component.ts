import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss'],
})
export class DatalistComponent implements OnInit {

  @Input() lists: any;
  @Input() titles: any;
  constructor() {}

  ngOnInit(): void {
    
  }

}
