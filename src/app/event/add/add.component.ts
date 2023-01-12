import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import{Location}from '@angular/common'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  showForm: boolean = false;
  event!: FormGroup;
  id: any;
  eventData: any;
  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute,
  ) { 

    routerParams.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
        this.getEvent();
      } else {
        this.prepareForm();
      }
    });
  }

  ngOnInit(): void {
  }

  prepareForm() {
    this.event = new FormGroup({
      eventTitle: new FormControl(this.eventData && this.eventData.eventTitle ? this.eventData.eventTitle : '', [Validators.required]),
      eventFor: new FormControl(this.eventData && this.eventData.eventFor ? this.eventData.eventFor : '', [Validators.required]),
      location: new FormControl(this.eventData && this.eventData.location ? this.eventData.location : '', [Validators.required]),
      fromDate: new FormControl(this.eventData && this.eventData.fromDate ? this.eventData.fromDate : '', [Validators.required]),
      toDate: new FormControl(this.eventData && this.eventData.toDate ? this.eventData.toDate : '', [Validators.required]),
      hostedBy: new FormControl(this.eventData && this.eventData.hostedBy ? this.eventData.hostedBy : '', [Validators.required]),
    })
    this.showForm=true;
  }

  get f() {
    return this.event.controls;
  }
  action() {
    if(this?.id){
      this.update()
    }else{
    this.submit();
    }
  }
  submit() {
 const config ={
  url:urls.event.create,
  payload:this.event.value,
 }
 this.apiService.post(config).subscribe((resp)=>{
  if(resp.success){
    this.toastService.success(resp.message);
    this.location.back();
  }
 })
  }
  update() {
    const config = {
      url:urls.event.update,
      payload:this.event.value,
    }
    this.apiService.put(config).subscribe((resp)=>{
      this.toastService.success(resp.message);
      this.location.back();
    })
  }

  getEvent(){
    const config = {
      url:urls.event.getById + this.id
    }
    this.apiService.get(config).subscribe((resp)=>{
      if(resp.success){
        this.eventData = resp.result;
      console.log(this.eventData,'resp');
        this.prepareForm();

      }
    })
  }
}
