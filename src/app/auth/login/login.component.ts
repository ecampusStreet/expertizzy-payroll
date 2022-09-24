import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { CurrentUserService, ToastService, urls } from '../../core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginValid : boolean = false;
  user:any={};

  auth:FormGroup | undefined;

  constructor(
    // private apiService:ApiService,
    private toast : ToastService,
    private userService : CurrentUserService,
    private router : Router,
    private api:RestApiService

  ) { }

  ngOnInit(): void {
    
  }


  submit(){
    console.log(this.user,"this.user");
   
    this.api.login(this.user).subscribe(data =>{
        console.log(data,"data");
        if(data.user){
          this.toast.success(data.message);
          this.userService.setUser(data);
          if(data.user.role == 'admin' ){
            this.router.navigate(['admin/dashboard']);
          }else{
          this.router.navigate(['user/home']);
          }
        } else{
          this.toast.error(data.message);
        }
    },error =>{
      this.toast.error(error.message);
    })
  }
}