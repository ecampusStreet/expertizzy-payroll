import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, ToastService, urls } from 'src/app/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  showForm:boolean=false;
  data!: FormGroup;
  letter_id: any;
  documentData:any;

  alignment=[
    {value:'left',viewValue:'Left'},
    {value:'right',viewValue:'Right'},
    {value:'center',viewValue:'Center'},
  ]
  copyofdata: any;
  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
    private routerParams: ActivatedRoute,

  ) { 

    routerParams.queryParams.subscribe((params: any) => {
      if (params) {
        this.letter_id = params.id;
        if(params.id){
          this.getDocument();
        }
        else{
          this.prepareForm();
        }
      }
    });
  }

  ngOnInit(): void {
  }
prepareForm(){
  this.data = new FormGroup({
    letterName: new FormControl (this.documentData && this.documentData.letterName ? this.documentData.letterName : '',[Validators.required]),
    subject: new FormControl (this.documentData.data && this.documentData.data.subject ? this.documentData.data.subject :'',[Validators.required]),
    bodyTitle: new FormControl(this.documentData.data && this.documentData.data.bodyTitle ? this.documentData.data.bodyTitle :'',[Validators.required]),
    body: new FormControl(this.documentData.data && this.documentData.data.body ? this.documentData.data.body :'',[Validators.required]),
    companyName: new FormControl(this.documentData.data && this.documentData.data.companyName ? this.documentData.data.companyName :'',[Validators.required]),
    signRemarks: new FormControl(this.documentData.data && this.documentData.data.signRemarks ? this.documentData.data.signRemarks :'',[Validators.required]),
    signForm: new FormControl(this.documentData.data && this.documentData.data.signForm ? this.documentData.data.signForm :'',[Validators.required]),
    sign:new FormControl(this.documentData.data && this.documentData.data.sign ? this.documentData.data.sign :'',[]),
    logo:new FormControl(this.documentData.data && this.documentData.data.logo ? this.documentData.data.logo :'',[]),
    Options: new FormGroup({
      imgPosition: new FormControl(this.documentData.options && this.documentData.options.imgPosition ? this.documentData.options.imgPosition :'',[Validators.required]),
      signPosition: new FormControl(this.documentData.options && this.documentData.options.signPosition ? this.documentData.options.signPosition :'',[Validators.required]),
      subjectPosition: new FormControl(this.documentData.options && this.documentData.options.subjectPosition ? this.documentData.options.subjectPosition :'',[Validators.required]),
      datePosition: new FormControl(this.documentData.options && this.documentData.options.datePosition ? this.documentData.options.datePosition :'',[Validators.required]),
      reciever: new FormControl(this.documentData.options && this.documentData.options.reciever ? this.documentData.options.reciever :'',[Validators.required])
    })
  })
}


  action(){
    if(this.letter_id){
      this.updateDocument();
    }
    else{
      this.submit();
    }
  }

 submit(){
    const formData = new FormData();
    formData.append('letterName', this.data.value.letterName);
    formData.append('data[subject]', this.data.value.subject);
    formData.append('data[name]', '');
    formData.append('data[bodyTitle]', this.data.value.bodyTitle);
    formData.append('data[body]', this.data.value.body);
    formData.append('data[companyName]', this.data.value.companyName);
    formData.append('data[signRemarks]', this.data.value.signRemarks);
    formData.append('data[signForm]', this.data.value.signForm);
    formData.append('sign', this.data.value.sign);
    formData.append('logo', this.data.value.logo);
    formData.append('options[imgPosition]', this.data.value.Options.imgPosition);
    formData.append('options[signPosition]', this.data.value.Options.signPosition);
    formData.append('options[subjectPosition]', this.data.value.Options.subjectPosition);
    formData.append('options[datePosition]', this.data.value.Options.datePosition);
    formData.append('options[reciever]', this.data.value.Options.reciever);

console.log(formData,"formData");
    const config ={
      url:urls.document.create,
      payload:formData
    };
    this.apiService.post(config).subscribe((resp)=>{
      this.toastService.success(resp.message);
      this.location.back();
    })
  }

  updateDocument(){
  const  changed:any ={}
  if(JSON.stringify(this.copyofdata) != (JSON.stringify(this.data.value))){
    if( this.copyofdata.letterName != this.data.value.letterName){
      changed.letterName = this.data.value.companyName
  }
  }
    const formData = new FormData();
    formData.append('letterName', this.data.value.letterName);
    formData.append('data[subject]', this.data.value.subject);
    formData.append('data[name]', '');
    formData.append('data[bodyTitle]', this.data.value.bodyTitle);
    formData.append('data[body]', this.data.value.body);
    formData.append('data[companyName]', this.data.value.companyName);
    formData.append('data[signRemarks]', this.data.value.signRemarks);
    formData.append('data[signForm]', this.data.value.signForm);
    formData.append('sign', this.data.value.sign);
    formData.append('logo', this.data.value.logo);
    formData.append('options[imgPosition]', this.data.value.Options.imgPosition);
    formData.append('options[signPosition]', this.data.value.Options.signPosition);
    formData.append('options[subjectPosition]', this.data.value.Options.subjectPosition);
    formData.append('options[datePosition]', this.data.value.Options.datePosition);
    formData.append('options[reciever]', this.data.value.Options.reciever);

console.log(formData,"formData");
    const config ={
      url:urls.document.update + this.letter_id,
      payload:formData
    };
    this.apiService.put(config).subscribe((resp)=>{
      console.log(resp,"resp data of update")
      this.toastService.success(resp.message);
      // this.location.back();
    })
  }

  getDocument(){
    const config ={
      url:urls.document.getById + this.letter_id,
    }
    this.apiService.get(config).subscribe((resp)=>{
      console.log(resp,'getbbyId');
      if(resp){
      this.documentData =resp.data;
      this.copyofdata = {...this.documentData};
      this.prepareForm();
      
      }
      
    })
  }



  onFileChange(e: any,field:any) {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0],"e.target.files[0]");
        this.data.value[field] = e.target.files[0];
        console.log( this.data.value," this.data.value");
      }
  }
}
