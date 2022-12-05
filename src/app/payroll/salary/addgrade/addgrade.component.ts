import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-addgrade',
  templateUrl: './addgrade.component.html',
  styleUrls: ['./addgrade.component.scss']
})
export class AddgradeComponent implements OnInit {

  salaryGrade!: FormGroup;
  showForm:boolean=true;
  constructor(
    private apiService : ApiService,
    private tostService : ToastService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.salaryGrade = this.fb.group({
      grade: ['',Validators.required],
      from:[''],
      to:['',Validators.required],
      breakups: this.fb.array([]),
      deduction: this.fb.array([]),

    });
  }
  breakups() : FormArray {
    return this.salaryGrade.get("breakups") as FormArray
  }
  deduction() : FormArray {
    return this.salaryGrade.get("deduction") as FormArray
  }


  newbreakups(): FormGroup {
    return this.fb.group({
      name: ['',Validators.required],
      percentage: ['',Validators.required],
    })
  }
  newdeduction(){
    return this.fb.group({
      name: ['',Validators.required],
      percentage: ['',Validators.required],
      amount:['',Validators.required],
    })
  }
   
  addBreakups() {
    this.breakups().push(this.newbreakups());
  }
  addDeduction(){
    this.deduction().push(this.newdeduction());

  }
   
  removeBreakups(i:number) {
    this.breakups().removeAt(i);
  }
  removeDeduction(i:number) {
    this.deduction().removeAt(i);
  }
  

  submit(){
    // console.log(this.salaryGrade.value, 'formvalue');
    const config = {
      url:urls.payroll.create,
      payload:this.salaryGrade.value,
    };
    this.apiService.post(config).subscribe((resp)=>{
      console.log(resp,"resp")
      if(resp.success){
        this.tostService.success(resp.message);
      }
    })
  }
}
