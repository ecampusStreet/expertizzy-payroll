import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, ToastService, urls } from 'src/app/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  showForm:boolean=false;
  holiday!: FormGroup;
  id:string='';
  holidayData: any;
  constructor(
    private apiService : ApiService,
    private tostService : ToastService,
    private location : Location,
    private routerParams:ActivatedRoute
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
        this.getHoliday();
      } else {
        this.prepareForm();
      }
    });
   }

  ngOnInit(): void {
  }

  prepareForm(){
    this.holiday = new FormGroup ({
      onThisDay: new FormControl (this.holidayData && this.holidayData.onThisDay ? this.holidayData.onThisDay :'',[Validators.required]),
      description:new FormControl (this.holidayData && this.holidayData.description ? this.holidayData.description :'',[Validators.required]),
      fromDate:new FormControl (this.holidayData && this.holidayData.fromDate ? this.holidayData.fromDate :'',[Validators.required]),
      toDate:new FormControl (this.holidayData && this.holidayData.toDate ? this.holidayData.toDate :'',[Validators.required]),
    })
  }

  submit(){
    const config = {
      url: this.id ? urls.holiday.update + this.id : urls.holiday.create ,
      payload:this.holiday.value,
    }
    this.apiService.post(config).subscribe((resp) =>{
      if(resp.success){
        this.tostService.success(resp.message);
        this.location.back();
      }
    })
  }

  getHoliday(){
    const config ={
      url:urls.holiday.getById + this.id,
    };
    this.apiService.get(config).subscribe((resp)=>{
      if(resp){
        this.holidayData = resp.result;
      this.prepareForm();
      }
    })
  }

}
