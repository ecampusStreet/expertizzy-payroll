import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, ToastService, urls } from 'src/app/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  departmentList: any = [];
  designationList: any = [];
  employeeList: any = [];
  financialYears: any = [];
  branchList: any = [];
  search!: FormGroup;

  branchName = [
    { value: 'development', viewValue: 'Development' },
    { value: 'marketing', viewValue: 'Marketing' },
  ];

  genderName = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    public dialogRef: MatDialogRef<FilterFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data, 'data');
  }

  ngOnInit(): void {
    this.getDepartment();
    this.getDesignation();
    this.getEmployee();
    this.getFinancialyear();
    this.getBranch();
    this.search = new FormGroup({
      department: new FormControl(this.data ? this.data.department : ''),
      designation: new FormControl(this.data ? this.data.designation : ''),
      doj: new FormControl(''),
      gender: new FormControl(''),
      branch: new FormControl(''),
      financialyear: new FormControl(''),
      experience: new FormControl(''),
    });
  }

  submit() {
    this.dialogRef.close(this.search.value);
  }

  close() {
    this.dialogRef.close(false );
  }
  reset() {
    this.dialogRef.close( );
  }

  getDepartment() {
    const config = {
      url: urls.departments.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.departmentList = resp.result.data;
      } else {
        this.toast.error(resp.message);
      }
    });
  }

  getDesignation() {
    const config = {
      url: urls.designation.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.designationList = resp.result.data;
      } else {
        this.toast.error(resp.message);
      }
    });
  }

  getEmployee() {
    const config = {
      url: urls.employee.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.employeeList = resp.result.data;
      } else {
        this.toast.error(resp.message);
      }
    });
  }

  getFinancialyear() {
    const config = {
      url: urls.financialYear.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.financialYears = resp.result.data;
      } else {
        this.toast.error(resp.message);
      }
    });
  }

  getBranch() {
    const config = {
      url: urls.branch.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.branchList = resp.result.data;
      } else {
        this.toast.error(resp.message);
      }
    });
  }
}
