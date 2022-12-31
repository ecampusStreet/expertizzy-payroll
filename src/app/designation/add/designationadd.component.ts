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
  selected: any;
  statuses :any= [
    { value:'active',label:'Active'},
    { value:'inactive',label:'In active'},
    ];
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
      status: new FormControl(
        this.designationData && this.designationData.status ? this.designationData.status : 'active',
        [Validators.required]
      ),
    });
    this.showForm = true;
    this.selected = this.designationData?.status ? this.designationData?.status: 'active';

  }

  getDesignation() {
    const config = {
      url: urls.designation.getById + this.id,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp) {
        this.designationData = resp.result;
        this.prepareForm();
      }
    });
  }
  action(){
    this.id ? this.update() : this.submit();
  }
  update() {
  this.designation.value._id = this.id;
    const config = {
      url:  urls.designation.update + this.id,
      payload: this.designation.value,
    };
    this.apiService.put(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.location.back();
      }
    });
  }

  submit() {
    const config = {
      url: urls.designation.create,
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
