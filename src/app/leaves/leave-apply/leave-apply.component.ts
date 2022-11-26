import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ApiService,
  urls,
  ToastService,
  CurrentUserService,
} from 'src/app/core';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.scss'],
})
export class LeaveApplyComponent implements OnInit {
  leaveForm!: FormGroup;
  applyTo: string = '';
  differenceDate: any;
  leaveTypeList: any = [];
  managers: any = [];
  sessions = [
    { label: 'session 1', value: 'session1' },
    { label: 'session 2', value: 'session2' },
  ];

  selectedFiles: any;
  emplID: any;
  userId: any;

  selectFile(event: { target: any }) {
    this.selectedFiles = event.target.files;
  }

  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    private router: Router,
    private userService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.getDate();
    this.getUserId();
    this.getEmployees();
    this.getLeavesType();
    this.leaveForm = new FormGroup({
      leaveType: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      // phone_no:new FormControl('',[Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      fromSession: new FormControl('', [Validators.required]),
      toSession: new FormControl('', [Validators.required]),
      // applyingTo: new FormControl('', [Validators.required]),
    });
  }

  getLeavesType() {
    const config = {
      url: urls.leaves.leaveTypeList,
    };
    this.apiService.get(config).subscribe((resp: any) => {
      if (resp.result && resp.result.data) {
        this.leaveTypeList = resp.result.data;
      }
    });
  }
  
  getEmployees() {
    const config = {
      url: urls.employee.list + '?limit=100&page=1',
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.managers = resp.result.data;
      } else {
        this.toast.error(resp.message);
      }
    });
  }
  minDate: any = '';

  getDate() {
    var date = new Date();
    var todate: any = date.getDate();
    if (todate < 10) {
      todate = '0' + todate;
    }

    var month: any = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    var year: any = date.getFullYear();
    this.minDate = year + '-' + month + '-' + todate;
  }
  get m() {
    return this.leaveForm.controls;
  }

  setApplyTo(event: any) {
    this.applyTo = event.value;
  }

  getUserId() {
    this.userService.getUser().then((resp) => {
      this.emplID = resp.user._id;
    });
  }

  onSubmit() {
    const config = {
      url: urls.leaves.apply + this.emplID + '/user/' + this.applyTo,
      payload: this.leaveForm.value,
    };
    this.differenceDate =
      this.leaveForm.value.start_date - this.leaveForm.value.end_date;
    console.log(this.differenceDate);
    this.apiService.post(config).subscribe((data) => {
      if (data.success) {
        this.toast.success(data.message);
        this.router.navigate(['expertizzy/leave/history']);
      }
    });
  }
}
