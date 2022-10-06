import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  constructor(
    private router : Router,
    private userService : CurrentUserService
  ) { }

  ngOnInit(): void {
  }
  toggleMenu(){
this.toggle.emit();
  }
 action(item:any){
  if(item == 'logout'){
    this.userService.deleteUser().then(resp =>{
      this.router.navigate(['/login']);
    })
  }else if(item == 'profile'){
    this.router.navigate(['/profile']);
  }
 }
}
