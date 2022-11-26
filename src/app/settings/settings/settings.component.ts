import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  // companyName: string = '';
  setting!: FormGroup;
  uploadedFiles: any;
  settingId: any;
  data: any = [];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.setting = new FormGroup({
      logo: new FormControl(this.data && this.data.logo ? this.data.logo : '', [
        Validators.required,
      ]),
      fileSource: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      brandFooter: new FormControl(null, [Validators.required]),
    });
  }

  onFileChange(event: any) {
    this.uploadedFiles = event.target.files[0];
    console.log(this.uploadedFiles, 'event');
  }
  submit() {
    const formData = new FormData();
    formData.append('companyName', this.setting.value.companyName);
    formData.append('address', this.setting.value.address);
    formData.append('brandFooter', this.setting.value.brandFooter);
    formData.append('fileSource', this.setting.value.fileSource);
    formData.append('logo', this.uploadedFiles);
    const config = {
      url: urls.setting.create,
      payload: formData,
    };
    this.apiService.post(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.message);
      }
    });
  }

  getData() {
    const config = {
      url: urls.setting.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.settingId = resp.result.data[0]._id;
        this.data = resp.result.data;
      }
    });
  }
}
