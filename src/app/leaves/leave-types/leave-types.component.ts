import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import { AddLeavetypeComponent } from 'src/app/core/components/add-leavetype/add-leavetype.component';
@Component({
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.scss'],
})
export class LeaveTypesComponent implements OnInit {
  leaveTypeList: any = [];
  editData: any = [];
  displayedColumns = ['typeName', 'total', 'balance', 'action'];

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private toast: ToastService,
    private router: Router,
    private utilsService: UtilsService,

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
        this.deleteConfirmationpopup(data);
        break;
    }
  }

   
  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'are you sure, you want to delete this leave type?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }

  delete(event: any) {
    const config = {
      url: urls.leaves.leaveDelete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.succes);
        this.leaveTypeList = [];
        this.getLeavesType();
      }
    });
  }
}
