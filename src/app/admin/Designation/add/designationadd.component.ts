import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, UtilsService, urls } from 'src/app/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-designationadd',
  templateUrl: './designationadd.component.html',
  styleUrls: ['./designationadd.component.scss'],
})
export class DesignationaddComponent implements OnInit {
  showForm: boolean = false;
  designation!: FormGroup;
  id: string = '';
  designationData: any;

  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute,
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
        this.getDesignation();
      } else {
        this.prepareForm();
      }
    });
  }

  ngOnInit(): void {}

  prepareForm() {
    this.designation = new FormGroup({
      designationName: new FormControl(
        this.designationData && this.designationData.designationName
          ? this.designationData.designationName
          : '',
        [Validators.required]
      ),
    });
    this.showForm = true;
  }

  getDesignation() {
    const config = {
      url: urls.designation.getById + this.id,
    };
    this.apiService.get(config).subscribe((resp) => {
      console.log(resp, 'resp');
      if (resp) {
        this.designationData = resp.result;
        this.prepareForm();
      }
    });
  }

  submit() {
    this.id ? (this.designation.value._id = this.id) : '';
    const config = {
      url: this.id
        ? urls.designation.update + this.id
        : urls.designation.create,
      payload: this.designation.value,
    };
    this.apiService.post(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.location.back();
      }
    });
  }
}
