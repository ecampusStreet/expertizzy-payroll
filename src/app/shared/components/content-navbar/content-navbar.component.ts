import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-navbar',
  templateUrl: './content-navbar.component.html',
  styleUrls: ['./content-navbar.component.scss']
})
export class ContentNavbarComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }
}
