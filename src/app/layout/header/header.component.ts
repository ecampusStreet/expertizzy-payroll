import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  toggleMenu(){
this.toggle.emit();
  }

  onLogout(){
    localStorage.removeItem('data');
    this.router.navigateByUrl('/');
  }
}
