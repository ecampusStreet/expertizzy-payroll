import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CurrentUserService, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  constructor(
    private router : Router,
    private userService : CurrentUserService,
    private utilService : UtilsService
  ) { }

  ngOnInit(): void {
  }
  toggleMenu(){
  this.toggle.emit();
  }
 action(item:any){
  if(item == 'logout'){
    let data = {
      header:"",
      message:"Are you sure, you want to logout?"
    }
    this.utilService.openDialog(data).then(resp =>{
      if(resp){
        this.userService.deleteUser().then(resp =>{
          this.router.navigate(['/login']);
        })
      }
    })
  }else if(item == 'profile'){
    this.userService.getUser().then(resp =>{
      this.router.navigate(['expertizzy/employee/add'], {
        queryParams: { id: resp.employee._id},
      });
    })
  }
 }
}
