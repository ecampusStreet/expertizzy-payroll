import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminDashboard, ApiService, CurrentUserService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  empID : any;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService,
    private userService : CurrentUserService
  ) {}
  breakpoint: number | undefined;

  cardData :any= [];

  ngOnInit(): void {
    this.getUserId();
    }
  
    getUserId() {
      this.userService.getUser().then((resp) => {
        this.empID = resp.employee._id;
        this.getDashboardData();
      });
    }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 500 ? 1 : 4;
  }
  onSelect(card: any) {
    if(card.url){
    this.router.navigate([card.url]);
    }else{
      this.toast.error('Not yet implemented');
    }
  }

  async getDashboardData() {
    this.cardData =[]; 
    const config = {
      url: urls.dashboard.list,
    };
    this.apiService.get(config).subscribe(async (resp) => {
      if (resp.success) {
        this.cardData = resp.result.data;
        this.getLeaveRequests();
        // this.toast.success(resp.message);
      }
    });
  }

  getLeaveRequests(){
    const config = {
      url: urls.leaves.list + this.empID,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp) {
        // this.toast.success(resp.message);
        let leaves ={
          label: 'Total leaves request',
          count: resp.result.data.length,
          icon: 'holiday_village',
          url:'expertizzy/leave/manage',
      }
      this.cardData.push(leaves)
      }
    });
  }
}
