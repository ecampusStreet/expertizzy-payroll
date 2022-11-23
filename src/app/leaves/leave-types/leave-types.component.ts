import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';
import { AddLeavetypeComponent } from 'src/app/core/components/add-leavetype/add-leavetype.component';
@Component({
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.scss'],
})
export class LeaveTypesComponent implements OnInit {
  leaveTypeList: any = [];
  editData: any = [];
  displayedColumns = ['typeName', 'total', 'pendingDays', 'action'];

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLeavesType();
  }

  add(data?: any): void {
    const dialogRef = this.dialog.open(AddLeavetypeComponent, {
      width: '500px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getLeavesType();
      }
    });
  }

  getLeavesType() {
    const config = {
      url: urls.leaves.leaveTypeList,
    };
    this.apiService.get(config).subscribe((resp: any) => {
      if (resp.result && resp.result.data) {
        this.leaveTypeList = resp.result.data;
        this.toast.success(resp.message);
      }
    });
  }

  action(data: any, action: any) {
    switch (action) {
      case 'edit':
        this.add(data);
        break;
      case 'delete':
        // this.deleteConfirmationpopup(data);
        break;
    }
  }
}
