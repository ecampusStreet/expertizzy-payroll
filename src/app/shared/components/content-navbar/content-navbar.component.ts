import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-navbar',
  templateUrl: './content-navbar.component.html',
  styleUrls: ['./content-navbar.component.scss'],
})
export class ContentNavbarComponent implements OnInit {
  @Input() isBack = false;
  @Input() title: string = '';
  constructor(private location: Location) {}

  ngOnInit(): void {}

  back() {
    this.location.back();
  }
}
