import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from 'src/app/core/constants/urlConstants';
import { UtilsService } from 'src/app/core/services';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.scss']
})
export class LeavehistoryComponent implements OnInit {

  panelOpenState = false;
  constructor(
    private router : Router,
    private apiService : ApiService,
    private toast : ToastService,
    private utilsService:UtilsService
  ) { }

  leaveHistory=[];

  ngOnInit(): void {
   this.getEmployees();
   
  }

  getEmployees(){
    const config ={
      url:urls.leaves.list,
    }
    this.apiService.get(config).subscribe(resp =>{
      console.log("Typeof data =" , typeof resp);
      console.log('response=',JSON.stringify(resp) )
      if(resp.success){
        this.leaveHistory =   this.leaveHistory.concat(resp.result.data);
        this.toast.success(resp.message);
      }else{
        this.toast.error(resp.message);
      }
    })
  }
}
