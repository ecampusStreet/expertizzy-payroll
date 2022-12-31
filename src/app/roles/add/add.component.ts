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
fields :any =[];
actions :any =[];
permission!: FormGroup;
allComplete: boolean = false;
data :any;
showPermission : boolean = false;
id :any;
roleName : string='';
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
  }

  action(){
    this.id ? this.submit() : this.create();
  }
prepareForm(){
  this.fields =[];
 let keys =  Object.keys(this.actions);
  keys.forEach((element:any) => {
    if(element != '_id' && element != 'roleName' && element != '__v' ){
      this.fields.push(element)
    }
  });
    // this.permission = new FormGroup({
    //   roleName : new FormControl(this.data && this.data.roleName ?this.data.roleName :'',[Validators.required] )
    // })
}
  updateAllComplete(action:any) {
    console.log("sdf 61");

    // this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.allComplete = this.fields.every((t:any) => t.true);
  }

  someComplete(action:any) {
    console.log("sdf");
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
        this.roleName = resp.data.roleName;
        console.log("8888888", this.actions);
        this.prepareForm();
      }
    })
  }
  submit(){
    this.actions.roleName =this.roleName;
    this.actions._id =this.id;
    const config ={
      url : urls.roles.getId +this.id,
      payload : this.actions
    }
    this.apiService.put(config).subscribe(resp =>{
      console.log(resp,"sdfsdfds");
      if(resp.success){
        this.toast.success(resp.message);
        this.showPermission = true;
        this.actions = resp.data;
        this.prepareForm();
      }
    }) 
  }
  create(){
    const config ={
      url : urls.roles.create,
      payload : {
        roleName: this.roleName,
       payload : this.roleName
      }
    }
    this.apiService.post(config).subscribe(resp =>{
      console.log(resp,"resp");
      if(resp.success){
        this.showPermission = true;
        this.actions = resp.data;
        this.id =resp.data._id;
        this.prepareForm();
      }
    })
  }
  update(){

  }
}
