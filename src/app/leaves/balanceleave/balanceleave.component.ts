import { Component, OnInit } from '@angular/core';
import { ApiService, CurrentUserService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-balanceleave',
  templateUrl: './balanceleave.component.html',
  styleUrls: ['./balanceleave.component.scss']
})
export class BalanceleaveComponent implements OnInit {
  empID: any;
  leaveBalance: any =[];

  constructor(
    private apiService: ApiService,
    private toast: ToastService, 
    private userService: CurrentUserService
  ) { }

  ngOnInit(): void {
    this.getUserId(); 
  }
  getUserId() {
    this.userService.getUser().then((resp) => {
      this.empID = resp.user._id;
      this.getLeaveBalance();
    });
  }

  // onResize(event:any) {
  //   this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
  // }

  getLeaveBalance(){
    const config ={
      url:urls.leaves.balance + this.empID,
    }
    this.apiService.get(config).subscribe((resp)=>{
      console.log(resp);
      if(resp){
        this.toast.success(resp.message);
        this.leaveBalance=this.leaveBalance.concat(resp.result.leaveDetails);
        console.log(this.leaveBalance, 'balance')
      }
    })
  }
}
