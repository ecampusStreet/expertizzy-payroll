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
    this.selected =days;
    if(this.data && this.data.weekOff && this.data.weekOff.length){
      this.setting.value.weekOff =this.copyofdata.weekOff;
      console.log(this.setting.value.weekOff,"this.setting.value.weekOff");
      const anotherList:any[]=[
        ]
        this.setting.value.setValue(anotherList)
    }
  }
  onFileChange(event: any) {
    this.uploadedFiles = event.target.files[0];
    console.log(this.uploadedFiles, 'event');
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
    console.log(this.setting.value.weekOff,'this.setting.value.weekOff', this.days)
// let data =  this.days.find()
let selectedDays :any =[];
 this.days.filter((day:any) => {if(day.selected) {selectedDays.push(day.value)}});
console.log(selectedDays,"selectedDays")
    let changedItem :any={};
    if(JSON.stringify(this.copyofdata) != (JSON.stringify(this.setting.value))){
            if( this.copyofdata.companyName != this.setting.value.companyName){
                changedItem.companyName = this.setting.value.companyName
            }
             if( this.copyofdata.weekOff != selectedDays){
                changedItem.weekOff =JSON.stringify(selectedDays);
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
    let selectedDays :any =[];
    this.days.filter((day:any) => {if(day.selected) {selectedDays.push(day.value)}});
    formData.append('companyName', this.setting.value.companyName);
    formData.append('address', this.setting.value.address);
    formData.append('brandFooter', this.setting.value.brandFooter);
    formData.append('weekOff', JSON.stringify(selectedDays));
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
        console.log(this.data.weekOff,"this.data.weekOff")
       if(this.data.weekOff){
          this.days.forEach(day => {
            debugger
            resp.result.data[0].weekOff.find( (t:any) => {if(t.includes(day.value)){day.selected = true;
              console.log(this.days,"this.days");
            }})
        });
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
