import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.scss']
})
export class LeaveApplyComponent implements OnInit {
  leaveForm!: FormGroup;

  leaveType = [
    {label:'sick leave',value:'sickLeave'},
    {label:'casual leave',value:'casualLeave'},
    {label:'Vacation leave',value:'sickLeave'},
    {label:'Paternity Leave',value:'paternityLeave'},
  ];

  fromSession = [
    {label:'session 1',value:'session 1'},
    {label:'session 2',value:'session 2'},  
  ];
  toSession = [
    {label:'session 1',value:'session 1'},
    {label:'session 2',value:'session 2'},  
  ];

  selectedFiles: any;

  selectFile(event: { target:any }) {
    this.selectedFiles = event.target.files;
}
  
  constructor() { }

  ngOnInit(): void {
    this.getDate();

    this.leaveForm = new FormGroup({
      leaveType:new FormControl('',[Validators.required]),
      reason:new FormControl('',[Validators.required]),
      phone_no:new FormControl('',[Validators.required]),
      start:new FormControl('',[Validators.required]),
      end:new FormControl('',[Validators.required]),
      fromsession:new FormControl('',[Validators.required]),
      tosession:new FormControl('',[Validators.required]),
    });
  }


  minDate:any=""

  getDate(){
    var date = new Date();
    var todate: any = date.getDate();
    if(todate < 10){
      todate = "0" + todate;
    }

    var month:any = date.getMonth() + 1;
    if(month < 10){
      month = '0' + month;
    }

    var year:any = date.getFullYear();
    this.minDate = year + "-" + month +"-"+ todate ;

    console.log(this.minDate);
    // console.log(todate);
  }
  get m(){
    return this.leaveForm.controls;
  }

  onSubmit(){
    console.log(this.leaveForm.value);
  }

}
