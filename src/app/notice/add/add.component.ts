import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, ToastService, UtilsService, urls } from 'src/app/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
[x: string]: any;
  showForm:boolean=false;
  notice!: FormGroup;
  limit=25;
  page=1;
  count =0;
  list:any=[];

  constructor(
    private router: Router,
    private apiService : ApiService,
    private toastService : ToastService,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.prepareForm();
    this.getRoles();
  }

  prepareForm(){
    this.notice = new FormGroup({
     title: new FormControl('',[Validators.required]),
     content: new FormControl('',[Validators.required]),
     date: new FormControl('',[Validators.required]),
     noticeTo: new FormControl('',[Validators.required]),
    })
  }

  get f() {
    return this.notice.controls;
  }

  getRoles() {
    const config = {
      url:
        urls.roles.list + '?limit=' + this.limit + '&page=' + this.page,
    };
    this.apiService.get(config).subscribe((data) => {
      if(data){
        this.list = this.list.concat(data.data);
        console.log(this.list,'role')
      this.count = data.count;
      this.toastService.success(data.message)
      }
      else{
        this.toastService.error(data.message);
      }
    });
  }
  action(){

  }
}
