import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
this.toggle.emit();
  }
}
