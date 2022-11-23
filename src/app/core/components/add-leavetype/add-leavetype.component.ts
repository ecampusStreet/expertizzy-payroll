import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { urls } from '../../constants';
import { ApiService, ToastService } from '../../services';

@Component({
  selector: 'app-add-leavetype',
  templateUrl: './add-leavetype.component.html',
  styleUrls: ['./add-leavetype.component.scss'],
})
export class AddLeavetypeComponent implements OnInit {
  showForm: boolean = false;
  leaveType!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddLeavetypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private toast: ToastService
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {
    this.leaveType = new FormGroup({
      typeName: new FormControl(this.data ? this.data.typeName : ''),
      total: new FormControl(this.data ? this.data.total : ''),
    });
  }

  action() {
    if (this.data) {
      this.update();
    } else {
      this.submit();
    }
  }
  update() {
    const config = {
      url: urls.leaves.leaveUpdate + this.data._id,
      payload: this.leaveType.value,
    };
    config.payload.pendingDays = this.leaveType.value.total;
    this.apiService.put(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.message);
        this.dialogRef.close(true);
      } else {
        this.toast.error(resp.message);
      }
    });
  }
  submit() {
    if (this.leaveType.valid) {
      const config = {
        url: urls.leaves.type,
        payload: this.leaveType.value,
      };
      config.payload.pendingDays = this.leaveType.value.total;
      this.apiService.post(config).subscribe((resp) => {
        if (resp.success) {
          this.toast.success(resp.message);
          this.dialogRef.close(true);
        } else {
          this.toast.error(resp.message);
        }
      });
    }
  }
  close() {
    this.dialogRef.close(false);
  }
}
