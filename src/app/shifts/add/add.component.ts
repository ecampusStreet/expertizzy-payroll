import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  
})
export class AddComponent implements OnInit {
  myDatePicker:any;
  showForm: boolean = false;
  shift!: FormGroup;
  id: string = '';
  data: any;
  baseCopy:any;

  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params) {
        this.id = params.id;
        if (params.id) {
          this.getShift();
        } else {
          this.prepareForm();
        }
      }
    });
  }

  ngOnInit(): void {}

  prepareForm() {
    this.shift = new FormGroup({
      shift_name: new FormControl(
        this.data && this.data.shift_name
          ? this.data.shift_name
          : '',
        [Validators.required]
      ),
      // fromDate: new FormControl(
      //   this.data && this.data.fromDate
      //     ? this.data.fromDate
      //     : '',
      //   [Validators.required]
      // ),
      // toDate: new FormControl(
      //   this.data && this.data.toDate
      //     ? this.data.toDate
      //     : '',
      //   [Validators.required]
      // ),
      fromTime: new FormControl(
        this.data && this.data.fromTime
          ? this.data.fromTime
          : '',
        [Validators.required]
      ),
      toTime: new FormControl(
        this.data && this.data.toTime
          ? this.data.toTime
          : '',
        [Validators.required]
      )
    });
    this.showForm = true;
  }

  getShift() {
    const config = {
      url: urls.shifts.getById + this.id,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp) {
        this.data = resp.result;
        this.baseCopy = {...resp.result}
        this.prepareForm();
      }
    });
  }

  action(){
    this.id ? this.update() : this.submit()
  }

  update() {
    let changedItem :any={};
    if(JSON.stringify(this.baseCopy) != (JSON.stringify(this.shift.value))){
            if( this.baseCopy.shift_name != this.shift.value.shift_name){
                changedItem.shift_name = this.shift.value.shift_name
            }
            // if( this.baseCopy.fromDate != this.shift.value.fromDate){
            //     changedItem.fromDate =this.shift.value.fromDate
            //  }
            //  if( this.baseCopy.fromTime != this.shift.value.fromTime){
            //     changedItem.fromTime =this.shift.value.fromTime
            //  }
             if( this.baseCopy.toTime != this.shift.value.toTime){
                changedItem.toTime = this.shift.value.toTime
             }
             if( this.baseCopy.toDate != this.shift.value.toDate){
                changedItem.toDate = this.shift.value.toDate
             }
    }
    const config = {
      url:  urls.shifts.update + this.id ,
      payload: changedItem
    };
    this.apiService.put(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.location.back();
      }
    });
  }

  submit() {
    const config = {
      url:  urls.shifts.create,
      payload:this.shift.value,
    };
    this.apiService.post(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.location.back();
      }
    });
  }

}
