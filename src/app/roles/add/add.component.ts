import { Component, OnInit } from '@angular/core';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
fields :any;
actions :any =[];
permission!: FormGroup;
allComplete: boolean = false;
data :any;
showPermission : boolean = false;
id :any;
  constructor(
    private location : Location,
    private apiService : ApiService,
    private routerParamas : ActivatedRoute,
    private toast :ToastService,
    private utils : UtilsService
  ) { 
    routerParamas.queryParams.subscribe((param:any) =>{
      if(param.id){
        this.id = param.id;
        this.get();
      }
    })
  }
 
  async ngOnInit() {
  this.actions= await this.utils.getPermission();
  this.prepareForm();
  }

  action(){
    this.id ? this.submit() : this.create();
  }
prepareForm(){
  this.fields =  Object.keys(this.actions);
    this.permission = new FormGroup({
      roleName : new FormControl(this.data && this.data.roleName ?this.data.roleName :'',[Validators.required] )
    })
}
  updateAllComplete(action:any) {
    // this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.allComplete = this.fields.every((t:any) => t.true);
  }

  someComplete(action:any) {
    return this.fields.filter((field :any) => this.actions[field][action]).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean,action:any) {
    console.log(completed,"completed");
    this.fields.filter((field :any) => this.actions[field][action] = completed);
    console.log(this.fields,"this.fields",this.actions)
  }
  back(){
    this.location.back();
  }
  get(){
    const config ={
      url : urls.roles.getId +this.id,
    }
    this.apiService.get(config).subscribe(resp =>{
      if(resp){
        this.data = resp.data;
        this.showPermission = true;
        this.actions = resp.data;
        this.prepareForm();
      }
    })
  }
  submit(){
    this.actions.roleName =this.permission.value.roleName;
    this.actions._id =this.id;
    const config ={
      url : urls.roles.getId +this.id,
      payload : this.actions
    }
    this.apiService.put(config).subscribe(resp =>{
      console.log(resp,"sdfsdfds");
      if(resp.data){
        this.showPermission = true;
        this.actions = resp.data;
        this.toast.success(resp.message);
      }
    }) 
  }
  create(){
    const config ={
      url : urls.roles.create,
      payload : {
        roleName: this.permission.value.roleName,
       payload : this.permission.value
      }
    }
    this.apiService.post(config).subscribe(resp =>{
      console.log(resp,"resp");
      if(resp.data){
        this.showPermission = true;
        this.actions = resp.data;
        this.toast.success(resp.message);
      }
    })
  }
  update(){

  }
}
