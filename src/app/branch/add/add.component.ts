import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-addbranch',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddbranchComponent implements OnInit {
  showForm: boolean = false;
  branch!: FormGroup;
  id: string = '';
  branchData: any;

  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params) {
        this.id = params.id;
        if (params.id) {
          this.getBranch();
        } else {
          this.prepareForm();
        }
      }
    });
  }

  ngOnInit(): void {}

  prepareForm() {
    this.branch = new FormGroup({
      branchName: new FormControl(
        this.branchData && this.branchData.branchName
          ? this.branchData.branchName
          : '',
        [Validators.required]
      ),
      branchHead: new FormControl(
        this.branchData && this.branchData.branchHead
          ? this.branchData.branchHead
          : '',
        [Validators.required]
      ),
      branchHR: new FormControl(
        this.branchData && this.branchData.branchHR
          ? this.branchData.branchHR
          : '',
        [Validators.required]
      ),
      branchAddress: new FormControl(
        this.branchData && this.branchData.branchAddress
          ? this.branchData.branchAddress
          : '',
        [Validators.required]
      ),
      contactNumber: new FormControl(
        this.branchData && this.branchData.contactNumber
          ? this.branchData.contactNumber
          : '',
        [Validators.required]
      ),
      email: new FormControl(
        this.branchData && this.branchData.email ? this.branchData.email : '',
        [Validators.required]
      ),
    });
    this.showForm = true;
  }

  getBranch() {
    const config = {
      url: urls.branch.getById + this.id,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp) {
        this.branchData = resp.result;
        this.prepareForm();
      }
    });
  }

  submit() {
    this.id ? (this.branch.value._id = this.id) : '';
    const config = {
      url: this.id ? urls.branch.update + this.id : urls.branch.create,
      payload: this.branch.value,
    };
    this.apiService.post(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.location.back();
        localStorage.setItem('branch',JSON.stringify(resp));
      }
    });
  }
}
