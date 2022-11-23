import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from 'src/app/core/constants/urlConstants';
import { CurrentUserService, UtilsService } from 'src/app/core/services';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss'],
})
export class LeavehistoryComponent implements OnInit {
  panelOpenState = false;
  empID: any;
  constructor(
    private apiService: ApiService,
    private toast: ToastService, 
    private userService: CurrentUserService
  ) {}

  leaveHistory = [];

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.userService.getUser().then((resp) => {
      this.empID = resp.user._id;
      this.getHistory();
    });
  }
  getHistory() {
    const config = {
      url: urls.leaves.balance + this.empID,
    };
    this.apiService.get(config).subscribe((resp) => {
      console.log(resp);
      if (resp.success) {
        this.leaveHistory = this.leaveHistory.concat(resp.result.appliedLeaves);

        this.toast.success(resp.message);
      } else {
        this.toast.error(resp.message);
      }
    });
  }
}
