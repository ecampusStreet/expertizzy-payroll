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
  uploadedFiles: any ={
    url:'',
    isUploaded:false
  };
  settingId: any;
  data: any;
  copyofdata:any;
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
        []
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
  }
  onFileChange(e: any) {
    let formData = new FormData();
    if (e.target.files && e.target.files[0]) {
      Array.from(e.target.files).forEach((file: any) => {
        // formData.append('files',file)
        this.uploadedFiles.url = file;
        this.uploadedFiles.isUploaded = false;
      });
      if(this.data){
        this.updateLogo();
      }else{
        this.submit()
      }
      
    }
  }

  updateLogo(){
    const formData = new FormData();
    formData.append('logo', this.uploadedFiles.url);
    const config ={
      url:urls.setting.logoUpdate + this.data._id,
      payload : formData
    }
    this.apiService.put(config).subscribe(resp =>{
      if (resp.success) {
        this.toast.success(resp.message);
        this.uploadedFiles.url = resp.imageUrl;
        this.update();
      }
    })
  }
  selectDay(day:any){
    day.selected = !day.selected;
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
                changedItem.weekOff =this.setting.value.weekOff;
             if( this.copyofdata.brandFooter != this.setting.value.brandFooter){
                changedItem.brandFooter =this.setting.value.brandFooter
             }
             if( this.copyofdata.address != this.setting.value.address){
                changedItem.address = this.setting.value.address
             }
    }
    const formData = new FormData();
       this.uploadedFiles.isUploaded ?'' :  changedItem.imageUrl = this.uploadedFiles.url;
    const config = {
      url: urls.setting.update + this.settingId,
      payload: changedItem,
    };
    this.apiService.put(config).subscribe((resp) => {
      if (resp.success) {
        this.uploadedFiles.isUploaded = true;
        this.toast.success(resp.message);
        this.getData()
      }
    });
  }
  submit() {
    const formData = new FormData();
    formData.append('companyName', this.setting.value.companyName);
    formData.append('address', this.setting.value.address);
    formData.append('brandFooter', this.setting.value.brandFooter);
    // formData.append('weekOff', this.setting.value.weekOff);
    this.uploadedFiles.isUploaded ?'' : formData.append('logo', this.uploadedFiles.url) 
    const config = {
      url:  urls.setting.create,
      payload: formData,
    };
    
    this.apiService.post(config).subscribe((resp) => {
      if (resp.success) {
        this.uploadedFiles.isUploaded = true;
        this.toast.success(resp.message);
        if(this.setting.value.weekOff){
          this.update();
        }
        this.getData();
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
        this.data.imageUrl ? this.uploadedFiles.isUploaded = true : this.uploadedFiles.isUploaded = false;
      //  if(this.data.weekOff){
      //     this.days.forEach(day => {
      //       resp.result.data[0].weekOff.find( (t:any) => {if(t.includes(day.value)){day.selected = true;
      //         console.log(this.days,"this.days");
      //       }})
      //   });
      //  }
     
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
