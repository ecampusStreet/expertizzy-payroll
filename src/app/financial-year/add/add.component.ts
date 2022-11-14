import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addfinancial-year',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddfinancialYearComponent implements OnInit {
  showForm:boolean=false;
  financialYear!: FormGroup;
  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.prepareForm()
  }

  prepareForm(){
    this.financialYear=new FormGroup({
      financialYear:new FormControl('',[Validators.required]),
      currentYear:new FormControl('',[Validators.required]),
    });
    this.showForm = true;
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
