import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
@Input() image : any;
@Input() cssClass:any;
@Input() actions:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
