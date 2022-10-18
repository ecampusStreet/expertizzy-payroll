import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, urls, ToastService } from 'src/app/core';

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
  managers:any = [];
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
  
  constructor(private apiService : ApiService,
    private toast : ToastService) { }

  ngOnInit(): void {
    this.getDate();
    this.getEmployees();
    this.leaveForm = new FormGroup({
      type:new FormControl('',[Validators.required]),
      reason:new FormControl('',[Validators.required]),
      phone_no:new FormControl('',[Validators.required]),
      start_date:new FormControl('',[Validators.required]),
      end_date:new FormControl('',[Validators.required]),
      fromsession:new FormControl('',[Validators.required]),
      tosession:new FormControl('',[Validators.required]),
      applyingTo:new FormControl('',[Validators.required]),
    });
  }

  getEmployees(){
    const config ={
      url:urls.employee.list+'?limit=100&page=1'
    }
    this.apiService.get(config).subscribe(resp =>{
      if(resp.success){
        this.managers =  resp.result.data;
      }else{
        this.toast.error(resp.message);
      }
    })
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
    const config ={
      url : urls.leaves.apply,
      payload:this.leaveForm.value
    }
    this.apiService.post(config).subscribe(data =>{
      console.log(data);
      if(data.success){
        this.toast.success(data.message);
      }
    })
  }
}
