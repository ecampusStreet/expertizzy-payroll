import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddDepartmentComponent implements OnInit {
  department!: FormGroup;
  data: any;
  id: any;
  isReadOnly: boolean = false;
  showForm: boolean = false;
  employeeList: any;

  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute,
    private utils: UtilsService
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params) {
        this.id = params.id;
        this.isReadOnly = params.readOnly == 'true' ? true : false;
        if (params.id) {
          this.getDepartment();
        } else {
          this.prepareForm();
        }
      }
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
  prepareForm() {
    this.department = new FormGroup({
      departmentName: new FormControl(
        this.data && this.data.departmentName ? this.data.departmentName : '',
        [Validators.required]
      ),
      departmentHead: new FormControl(
        this.data && this.data.departmentHead ? this.data.departmentHead : '',
        [Validators.required]
      ),
      location: new FormControl(
        this.data && this.data.location ? this.data.location : '',
        [Validators.required]
      ),
    });
    if (this.isReadOnly) {
      this.department.disable();
    }
    this.showForm = true;
  }
  enableForm() {
    this.isReadOnly = false;
    this.department.enable();
  }
  getDepartment() {
    const config = {
      url: urls.departments.getById + this.id,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.data = resp.result.data;
        this.prepareForm();
      }
    });
  }
  submit() {
    this.id ? (this.department.value._id = this.id) : '';
    const config = {
      url: this.id
        ? urls.departments.update + this.id
        : urls.departments.create,
      payload: this.department.value,
    };
    this.apiService.post(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.location.back();
      }
    });
  }
  getUsers() {
    const config = {
      url: urls.employee.list + '?limit=1000&page=1',
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.employeeList = resp.result.data;
      }
    });
  }

  setValue() {
    const config = {
      url: urls.employee.list,
    };
    this.utils.dataFilter(config).then((resp) => {
      if (resp) {
        this.department.patchValue({
          departmentHead:
            resp.firstName + ' ' + resp.middleName + ' ' + resp.lastName,
        });
      }
    });
  }
}
