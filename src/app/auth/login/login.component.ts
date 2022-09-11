import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService, ToastService, urls } from '../../core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginValid : boolean = false;
  user:any={};
  constructor(
    // private apiService:ApiService,
    private toast : ToastService,
    private userService : CurrentUserService,
    private router : Router
  ) { }

  users =[
    {
      username:'admin',
      password:'password',
      role:'admin'
    },
    {
      username:'user',
      password:'password',
      role:'user'
    }, {
      username:'hr',
      password:'password',
      role:'hr'
    }
  ]
  ngOnInit(): void {
  }

  submit(){
    console.log(this.user,"this.user");
    // const config ={
    //   url:urls.login,
    //   payload:this.user
    // }
    // this.apiService.post(config).subscribe(data =>{
    //     console.log(data,"data");
    //     if(data.result){
    //       this.toast.success(data.message);
    //       this.userService.setUser(data.result);
    //       this.router.navigate(['dashboard']);
    //     }
    // },error =>{
    //   this.toast.error(error.message);
    // })

    let validUser = this.users.filter(user => user.username == this.user.username && user.password == this.user.password);
    console.log(validUser,"validUser");
    this.router.navigate(['/admin'])
  }
}