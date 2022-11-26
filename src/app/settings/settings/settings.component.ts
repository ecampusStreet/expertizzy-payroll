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
    this.prepareForm();
  }

  prepareForm() {
    this.setting = new FormGroup({
      // logo: new FormControl(
      //   this.data && this.data.imageUrl ? this.data.imageUrl : '',
      //   [Validators.required]
      // ),
      companyName: new FormControl(
        this.data && this.data.companyName ? this.data.companyName : '',
        [Validators.required]
      ),
      address: new FormControl(
        this.data && this.data.address ? this.data.address : '',
        [Validators.required]
      ),
      brandFooter: new FormControl(
        this.data && this.data.brandFooter ? this.data.brandFooter : '',
        [Validators.required]
      ),
    });
    console.log(this.setting.value, 'sdfsd');
  }
  onFileChange(event: any) {
    this.uploadedFiles = event.target.files[0];
    console.log(this.uploadedFiles, 'event');
  }

  action(){
    if( this.data){
      this.update();
    }else{
      this.submit()
    }
  }

  update() {
    const formData = new FormData();
    formData.append('companyName', this.setting.value.companyName);
    formData.append('address', this.setting.value.address);
    formData.append('brandFooter', this.setting.value.brandFooter);
    formData.append('fileSource', this.setting.value.fileSource);
    formData.append(
      'logo',
      this.uploadedFiles ? this.uploadedFiles : this.data.imageUrl
    );
    const config = {
      url: urls.setting.update + this.settingId,
      payload: formData,
    };
    this.apiService.put(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.message);
      }
    });
  }
  submit() {
    const formData = new FormData();
    formData.append('companyName', this.setting.value.companyName);
    formData.append('address', this.setting.value.address);
    formData.append('brandFooter', this.setting.value.brandFooter);
    formData.append('fileSource', this.setting.value.fileSource);
    formData.append(
      'logo',
      this.uploadedFiles ? this.uploadedFiles : this.data.imageUrl
    );
    const config = {
      url:  urls.setting.create,
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
        this.data = resp.result.data[0];
        this.prepareForm();
        console.log(this.data, ' this.data ');
      } else {
        this.prepareForm();
      }
    });
  }
}
