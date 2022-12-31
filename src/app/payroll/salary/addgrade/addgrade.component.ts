import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-addgrade',
  templateUrl: './addgrade.component.html',
  styleUrls: ['./addgrade.component.scss']
})
export class AddgradeComponent implements OnInit {

  salaryGrade!: FormGroup;
  showForm:boolean=true;
  salaryData: any;
  id:string='';
  statuses :any= [
    { value:'active',label:'Active'},
    { value:'inactive',label:'In active'},
    ];
  selected: any;
  constructor(
    private routerParams: ActivatedRoute,
    private location: Location,
    private apiService : ApiService,
    private tostService : ToastService,
    private fb:FormBuilder) {
      routerParams.queryParams.subscribe((params: any) => {
        if (params.id) {
          this.id = params.id;
          this.getSalaryBreakups();
        } else {
          this.prepareForm();
        }
      });
     }

  ngOnInit(): void {
  }
  prepareForm(){
    this.salaryGrade = this.fb.group({
      grade: [this.salaryData && this.salaryData?.grade ?  this.salaryData?.grade : '',Validators.required],
      from:[this.salaryData && this.salaryData?.from ?  this.salaryData?.from  : '',Validators.required],
      to:[this.salaryData && this.salaryData?.to ?  this.salaryData?.to  : '',Validators.required],
      status:[this.salaryData && this.salaryData?.status ?  this.salaryData?.status  : 'active'],
      breakups: this.fb.array([]),
      deduction: this.fb.array([]),

    });
    // this.showForm = true;
    this.selected = this.salaryData?.status ? this.salaryData?.status: 'active';
    this.newbreakups();
    this.newdeduction();

  }


  breakups()  {
    return <FormArray>this.salaryGrade.get("breakups") as FormArray
  }
  deduction(){
    return <FormArray>this.salaryGrade.get("deduction") as FormArray
  }


  newbreakups() {
    if(this.salaryData && this.salaryData.breakups){

    this.salaryData.breakups.forEach((element :any) => {
     let data = this.fb.group({
        name: [element.name],
        percentage: [element.percentage],
      })
    this.breakups().push(data);
    });
    }
    else{
      let nodata = this.fb.group({
        name: ['',],
        percentage: ['',],
      })
      this.breakups().push(nodata);
    } 
  }

  
  newdeduction(){
    if(this.salaryData && this.salaryData.deduction){
      this.salaryData.deduction.forEach((element :any) => {
        let data = this.fb.group({
          name: [element.name],
          percentage: [ element.percentage],
          amount:[element.amount.$numberDecimal],
        })
        this.deduction().push(data);
      });
    }
    else{
      let nodata = this.fb.group({
        name: [""],
        percentage: [ ""],
        amount:[""],
      })
      this.deduction().push(nodata);
    }
  
  }
   
  addBreakups() {
    // this.breakups().push(this.newbreakups());
    let nodata = this.fb.group({
      name: [''],
      percentage: [''],
    })
    this.breakups().push(nodata);
  }

  addDeduction(){
    // this.deduction().push(this.newdeduction());
    let nodata = this.fb.group({
      name: [""],
      percentage: [ ""],
      amount:[""],
    })
    this.deduction().push(nodata);
  }
   
  removeBreakups(i:number){
    this.breakups().removeAt(i);
  }
  removeDeduction(i:number){
    this.deduction().removeAt(i);
  }
  
  action(){
    if(this.id){
      this.update();
    }
    else{
      this.submit();
    }
  }

  update(){
    this.id ? (this.salaryGrade.value._id = this.id) : '';
    const config = {
      url: urls.payroll.update + this.id,
      payload:this.salaryGrade.value,
    };
    this.apiService.put(config).subscribe((resp) => {
      if(resp.success){
        this.tostService.success(resp.message);
        this.location.back();
      }
    })
  }

  submit(){
    const config = {
      url: urls.payroll.create,
      payload:this.salaryGrade.value,
    };
    this.apiService.post(config).subscribe((resp) => {
      if(resp.success){
        this.tostService.success(resp.message);
        this.location.back();
      }
    })
  }

  getSalaryBreakups() {
    const config = {
      url: urls.payroll.getById + this.id,
    };
    this.apiService.get(config).subscribe((resp) => {
      console.log(resp);
      if(resp) {
        this.salaryData = resp.result;
        this.prepareForm();
      }
    });
  }
}
