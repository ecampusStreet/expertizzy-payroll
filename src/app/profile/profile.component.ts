import { Component, OnInit } from '@angular/core';
import { ApiService, CurrentUserService, ToastService, urls } from '../core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  panelOpenState = false;

  emp: any;
  emplID:any;

 employee :any;
  constructor(
    private apiService : ApiService,
    private userService : CurrentUserService,
    private toast : ToastService
  ) { }

  ngOnInit(): void {
  this.getUserId();
  }
  getUserId(){
this.userService.getUser().then(resp =>{
  this.emplID = resp.user._id;
  this.getData();
})
  }
  getData(){
    const config={
      url: urls.profile + this.emplID
    }
    this.apiService.get(config).subscribe(data =>{
      if(data.success){
        this.employee = data.result.data;
        console.log(this.employee);
      }
    })
  }
  edit(){
    this.toast.error('Not yet implemented.');
  }
}
