import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';
import { Location } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-addfinancial-year',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddfinancialYearComponent implements OnInit {
  showForm:boolean=false;
  financialYear!: FormGroup;
  id : any;
  data:any;
  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute,
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params) {
        this.id = params.id;
        if(params.id){
          this.getYear();
        }
        else{
          this.prepareForm();
        }
      }
    });
   }
   
   getYear(){
     const config ={
      url :urls.financialYear.getById+this.id
    }
    this.apiService.get(config).subscribe((resp) =>{
      if(resp.success){
        this.toastService.success(resp.message);
        this.data = resp.result;
        this.prepareForm();
      }
    });
   }
   
  ngOnInit(): void {
    this.prepareForm()
  }

  closeDatePicker(elem:any,date :MatDatepicker<any> ) {
    this.financialYear.value.currentYear = elem
     date.close();
  }
  prepareForm(){
    this.financialYear=new FormGroup({
      financialYear:new FormControl( this.data ?  this.data.financialYear :'',[Validators.required]),
      currentYear:new FormControl(this.data ?  this.data.currentYear :'',[Validators.required]),
    });
    this.showForm = true;
  }

  action(){
    this.id ? this.update() : this.submit();
  }
  update(){
    const config ={
      url :urls.financialYear.update + this.id,
      payload:this.financialYear.value
    }
    this.apiService.put(config).subscribe((resp) =>{
      if(resp.success){
        this.toastService.success(resp.message);
        this.location.back();
      }
    });
  }
  submit(){
    const config ={
      url :urls.financialYear.create,
      payload:this.financialYear.value
    }
    this.apiService.post(config).subscribe((resp) =>{
      if(resp.success){
        this.toastService.success(resp.message);
        this.location.back();
      }
    });
  }
}
