import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ApiService, CurrentUserService, ToastService, urls, UtilsService } from '../../core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginValid : boolean = false;
  user:any={};
  hide=true;
  auth:FormGroup | undefined;

  constructor(
    private apiService:ApiService,
    private toast : ToastService,
    private userService : CurrentUserService,
    private router : Router,
    private api:RestApiService,
    private utils: UtilsService

  ) { }

  ngOnInit(): void {
    
  }


  submit(){
    const config ={
      url : urls.login,
      payload:this.user
    }
    this.apiService.post(config).subscribe(data =>{
      if(data.success){
        this.toast.success(data.message);
        this.userService.setUser(data.data);
          this.utils.getPermission().then((resp:any) =>{
              localStorage.setItem('permissions',resp);
          })
          this.router.navigate(['expertizzy/dashboard']);
      }else{
        if(data.message){
          this.toast.error(data.message);
        }
      }
    },error =>{
      this.toast.error(error.message);
    })
  }
}