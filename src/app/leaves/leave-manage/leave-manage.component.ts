import { Component, OnInit } from '@angular/core';
import { CurrentUserService, urls } from 'src/app/core';
import { ApiService, ToastService } from 'src/app/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave-manage.component.html',
  styleUrls: ['./leave-manage.component.scss'],
})
export class LeavemanageComponent implements OnInit {
  searchText = '';
  panelOpenState: boolean = false;
  leavesList: any = [];
  empID: any;
  leaveApplicationId: any;

  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    private userService: CurrentUserService
  ) {}

  leaveStatus = [
    { value: 'pending', viewValue: 'Pending' },
    { value: 'approved', viewValue: 'Approved' },
    { value: 'reject', viewValue: 'Reject' },
  ];

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.userService.getUser().then((resp) => {
      this.empID = resp.employee._id;
      this.getLeaves();
    });
  }

  getLeaves() {
    // console.log(this.empID , "id get");
    const config = {
      url: urls.leaves.list + this.empID,
    };
    this.apiService.get(config).subscribe((resp) => {
      console.log(resp);
      if (resp) {
        this.toast.success(resp.message);
        this.leavesList = resp.result.data;
      }
    });
  }

  reject(obj: any) {
    const config = {
      url: urls.leaves.reject + obj._id,
      payload: {},
    };
    this.apiService.put(config).subscribe((resp) => {
      this.toast.success(resp.message)
    });
  }

  approve(list: any) {
    const config = {
      url: urls.leaves.approve + list._id,
      payload: {
        remark:list.remarks
      },
    };
    this.apiService.put(config).subscribe((resp) => {
      this.toast.success(resp.message)
    });
  }
  onChangeStatus(event: any) {}

  submit(list: any) {
    console.log(list, 'list');
    if (list.leaveStatus == 'approved') {
      this.approve(list);
    } else if (list.leaveStatus == 'reject') {
      this.reject(list);
    }
  }
}
