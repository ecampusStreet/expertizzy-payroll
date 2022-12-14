import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import { days } from 'src/app/core/constants/data';

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
  data: any;
  copyofdata:any;
  newData: any;
  selectedDays:any;
  days =days
  selected:any;
  constructor(
    private apiService: ApiService,
    private toast: ToastService,
  ) {}

  ngOnInit(): void {
    this.getData();
    this.prepareForm();
  }

  prepareForm() {
    this.setting = new FormGroup({
      logo: new FormControl(
        this.data && this.data.imageUrl ? this.data.imageUrl : '',
        []
      ),
      companyName: new FormControl(
        this.data && this.data.companyName ? this.data.companyName : '',
        [Validators.required]
      ),
      weekOff: new FormControl(
        this.data && this.data.weekOff ? this.data.weekOff: '',
        [Validators.required]
      ),
      address: new FormControl(
        this.data && this.data.address ? this.data.address : '',
        [Validators.required]
      ),
      brandFooter: new FormControl(
        this.data && this.data.brandFooter ? this.data && this.data.brandFooter : '',
        [Validators.required]
      ),
    });
    this.selected =days;
  }
  onFileChange(event: any) {
    this.uploadedFiles = event.target.files[0];
    console.log(this.uploadedFiles, 'event');
  }

  action(){
    if(this.data){
      this.update();
    }else{
      this.submit()
    }
  }

  update() {
    let changedItem :any={};
    if(JSON.stringify(this.copyofdata) != (JSON.stringify(this.setting.value))){
            if( this.copyofdata.companyName != this.setting.value.companyName){
                changedItem.companyName = this.setting.value.companyName
            }
            if( this.copyofdata.weekOff != this.setting.value.weekOff){
                changedItem.weekOff =this.setting.value.weekOff
             }
             if( this.copyofdata.brandFooter != this.setting.value.brandFooter){
                changedItem.brandFooter =this.setting.value.brandFooter
             }
             if( this.copyofdata.address != this.setting.value.address){
                changedItem.address = this.setting.value.address
             }
    }
    const formData = new FormData();
      changedItem.companyName ? formData.append('companyName',changedItem.companyName) : '';
      changedItem.address ? formData.append('address', changedItem.address) :'';
      changedItem.brandFooter ? formData.append('brandFooter', changedItem.brandFooter) : '';
      changedItem.weekOff ? formData.append('weekOff', changedItem.weekOff) : '';
      this.uploadedFiles ? formData.append('logo', this.uploadedFiles) :''
    const config = {
      url: urls.setting.update + this.settingId,
      payload: formData,
    };
    this.apiService.put(config).subscribe((resp) => {
      if (resp.success) {
        this.newData = resp.result.data;
        this.toast.success(resp.message);
      }
    });
  }
  submit() {
    const formData = new FormData();
    formData.append('companyName', this.setting.value.companyName);
    formData.append('address', this.setting.value.address);
    formData.append('brandFooter', this.setting.value.brandFooter);
    formData.append('weekOff', this.setting.value.weekOff);
    this.uploadedFiles ? formData.append('logo', this.uploadedFiles) :''
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
        this.copyofdata = {...this.data};
       if(this.copyofdata.weekOff){
        // this.copyofdata.weekOff.filter(day => )
       }
        this.prepareForm();
      } else {
        this.prepareForm();
      }
    });
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
}
}
