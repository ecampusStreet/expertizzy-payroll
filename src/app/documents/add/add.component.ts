import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService, ToastService, urls } from 'src/app/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  showForm:boolean=false;
  data!: FormGroup;


  alignment=[
    {value:'left',viewValue:'Left'},
    {value:'right',viewValue:'Right'},
    {value:'center',viewValue:'Center'},
  ]
  constructor(
    private location: Location,
    private apiService: ApiService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.prepareForm();
  }
prepareForm(){
  this.data = new FormGroup({
    subject: new FormControl (''),
    bodyTitle: new FormControl(''),
    body: new FormControl(''),
    companyName: new FormControl(''),
    signRemarks: new FormControl(''),
    signForm: new FormControl(''),
    sign:new FormControl(''),
    logo:new FormControl(''),
    Options: new FormGroup({
      imgPostion: new FormControl(''),
      signPostion: new FormControl(''),
      subjectPostion: new FormControl(''),
      datePostion: new FormControl(''),
      reciverPostion: new FormControl('')
    })
  })
}
 submit(){
    const formData = new FormData();
    formData.append('subject', this.data.value.subject);
    formData.append('bodyTitle', this.data.value.bodyTitle);
    formData.append('body', this.data.value.body);
    formData.append('companyName', this.data.value.companyName);
    formData.append('signRemarks', this.data.value.signRemarks);
    formData.append('sign', this.data.value.sign);
    formData.append('logo', this.data.value.logo);
    formData.append('options[imgPostion]', this.data.value.Options.imgPostion);
    formData.append('options[signPostion]', this.data.value.Options.signPostion);
    formData.append('options[subjectPostion]', this.data.value.Options.subjectPostion);
    formData.append('options[datePostion]', this.data.value.Options.datePostion);
    formData.append('options[reciverPostion]', this.data.value.Options.reciverPostion);

console.log(formData,"formData");
    const config ={
      url:urls.document.create,
      payload:formData
    };
    this.apiService.post(config).subscribe((resp)=>{
      this.toastService.success(resp.message);
      // this.location.back();
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
