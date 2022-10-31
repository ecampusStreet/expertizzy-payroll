import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';
import { bloodGroup } from 'src/app/core/constants/data';

@Component({
  selector: 'app-employee',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  GradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  selectedDesignation ='technician';
  form!: FormGroup;
  expDetail!: FormGroup;
  depDetail!: FormGroup;
  emgDetail!: FormGroup;
  accDetail!: FormGroup;
  qualiDetail!: FormGroup;
  title = "Add new employee";
  employeeData :any;
  id:string ='';
  showForm : boolean = false;
  bloodGroups = bloodGroup;
  selectedBloodGroup : string ='';
  expDetailForm!: FormGroup;
  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private apiService : ApiService,
    private tostService : ToastService,
    private location : Location,
    private fb: FormBuilder
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
        this.getEmployeeData();
      }else{
        this.prepareForm();
      }
    })
  }

  ngOnInit(): void {
  }

  prepareForm(){
    console.log(this.employeeData ,"this.employeeData ");
    this.form = new FormGroup({
      // deputy_id: new FormControl('', [Validators.required]),
      firstName: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].firstName :'', [Validators.required]),
      lastName: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].lastName :'', [Validators.required]),
      middleName: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].middleName :'', [Validators.required]),
      dob: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].dob :'', [Validators.required]),
      ph_no: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].ph_no :'', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].email :'', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      bloodGroup: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].bloodGroup :'', [Validators.required]),
      aadhara_no: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].aadhara_no :'', [Validators.required]),
      presentAddress: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].presentAddress :'', [Validators.required]),
      permanentAddress: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].permanentAddress :'', [Validators.required]),

    });
    this.selectedDesignation =this.employeeData && this.employeeData.experienceDetails[0]? this.employeeData.experienceDetails[0].designation:'';
    this.expDetail = this.fb.group({
      companyName: new FormControl(this.employeeData && this.employeeData.experienceDetails[0]? this.employeeData.experienceDetails[0].companyName :'', [Validators.required]),
      yearOfExp: new FormControl(this.employeeData && this.employeeData.experienceDetails[0]? this.employeeData.experienceDetails[0].yearOfExp :'', [Validators.required]),
      designation: new FormControl(this.employeeData && this.employeeData.experienceDetails[0]? this.employeeData.experienceDetails[0].designation :'', [Validators.required]),
    });
    // this.expDetail = new FormGroup({
    //   data :this.fb.array([
    //     this.expDetailForm
    // ])
    //   })

    this.expDetail.patchValue({ designation: this.employeeData && this.employeeData.experienceDetails[0]? this.employeeData.experienceDetails[0].designation:'' });
    this.depDetail = new FormGroup({
      dept_name: new FormControl(this.employeeData && this.employeeData.departmentDetails[0]? this.employeeData.departmentDetails[0].dept_name
        :'', [Validators.required]),
      // team:new FormControl('',[Validators.required]),
      teamLeader: new FormControl(this.employeeData && this.employeeData.departmentDetails[0]? this.employeeData.departmentDetails[0].teamLeader:'', [Validators.required]),
      doj: new FormControl(this.employeeData && this.employeeData.departmentDetails[0]? this.employeeData.departmentDetails[0].doj:'', [Validators.required]),
    });

    this.emgDetail = new FormGroup({
      name: new FormControl( this.employeeData && this.employeeData.emergencyDetails[0]? this.employeeData.emergencyDetails[0].name:'', [Validators.required]),
      relation_with: new FormControl(this.employeeData && this.employeeData.emergencyDetails[0]? this.employeeData.emergencyDetails[0].relation_with:'', [Validators.required]),
      age: new FormControl(this.employeeData && this.employeeData.emergencyDetails[0]? this.employeeData.emergencyDetails[0].age:'', [Validators.required]),
      address: new FormControl(this.employeeData && this.employeeData.emergencyDetails[0]? this.employeeData.emergencyDetails[0].address:'', [Validators.required]),
      contact_no: new FormControl(this.employeeData && this.employeeData.emergencyDetails[0]? this.employeeData.emergencyDetails[0].contact_no:'', [Validators.required]),
    });
    this.accDetail = new FormGroup({
      acc_number: new FormControl(this.employeeData && this.employeeData.accountDetails[0]? this.employeeData.accountDetails[0].acc_number:'', [Validators.required]),
      branch: new FormControl(this.employeeData && this.employeeData.accountDetails[0]? this.employeeData.accountDetails[0].branch:'', [Validators.required]),
      ifscCode: new FormControl(this.employeeData && this.employeeData.accountDetails[0]? this.employeeData.accountDetails[0].ifscCode:'', [Validators.required]),
      uan_no: new FormControl(this.employeeData && this.employeeData.accountDetails[0]? this.employeeData.accountDetails[0].uan_no:'', [Validators.required]),
      panCard: new FormControl(this.employeeData && this.employeeData.accountDetails[0]? this.employeeData.accountDetails[0].panCard:'', [Validators.required]),
    });
    this.qualiDetail = new FormGroup({
      sslc: new FormGroup({
        yearOfPassing: new FormControl(this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].sslc.yearOfPassing : '', [Validators.required]),
        marks: new FormControl( this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].sslc.marks: '', [Validators.required]),
      }),
      puc: new FormGroup({
        yearOfPassing: new FormControl( this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].puc.yearOfPassing:'', [Validators.required]),
        marks: new FormControl( this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].puc.marks:'', [Validators.required]),
        specialization: new FormControl( this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].puc.specialization:'', [Validators.required]),
      }),
      degree: new FormGroup({
        yearOfPassing: new FormControl(this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].puc.yearOfPassing:'', [Validators.required]),
        marks: new FormControl(this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].puc.marks:'', [Validators.required]),
        specialization: new FormControl(this.employeeData && this.employeeData.qualificationDetails[0]? this.employeeData.qualificationDetails[0].puc.specialization:'', [Validators.required]),
      }),
    })
    this.showForm = true;
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {}

  gender = ["male", "female"];

  Designation = [
    { value: 'M/COperator', viewValue: 'M/C Operator' },
    { value: 'fitter', viewValue: 'Fitter' },
    { value: 'welder', viewValue: 'Welder' },
    { value: 'houseKeeping', viewValue: 'House Keeping' },
    { value: 'asstFitter', viewValue: 'Asst.Fitter' },
    { value: 'officeBoy', viewValue: 'Office Boy' },
    { value: 'trainee', viewValue: 'Trainee' },
    { value: 'operator', viewValue: 'Operator' },
    { value: 'sharingM/CAsst', viewValue: 'Sharing M/C Asst' },
    { value: 'storeKeeper', viewValue: 'Store Keeper' },
    { value: 'grinder', viewValue: 'Grinder' },
    { value: 'hydroHelper', viewValue: 'Hydro Helper' },
    { value: 'traineeWelder', viewValue: 'Trainee welder' },
    { value: 'helper', viewValue: 'Helper' },
    { value: 'driver', viewValue: 'Driver' },
    { value: 'electriction', viewValue: 'Electriction' },
    { value: 'technician', viewValue: 'Technician' },
  ];

  Department = [
    { value: 'Sand Blasting', viewValue: 'Sand Blasting' },
    { value: 'HR & S4', viewValue: 'HR & S4' },
    { value: 'CR Section', viewValue: 'CR Section' },
    { value: 'Full Welding', viewValue: 'Full Welding' },
    { value: 'Hk', viewValue: 'Hk' },
    { value: 'End Plate', viewValue: 'End Plate' },
    { value: 'Accessories', viewValue: 'Accessories' },
    { value: 'Full Welding', viewValue: 'Full Welding' },
    { value: 'End Plate', viewValue: 'End Plate' },
    { value: 'Loading', viewValue: 'Loading' },
    { value: 'Office', viewValue: 'Office' },
    { value: 'Fitment', viewValue: 'Fitment' },
    { value: 'Shearing', viewValue: 'Shearing' },
    { value: 'Store', viewValue: 'Store' },
    { value: 'Grinding Section', viewValue: 'Grinding Section' },
    { value: 'Clip Cutting', viewValue: 'Clip Cutting' },
    { value: 'General', viewValue: 'General' },
    { value: 'Electrical', viewValue: 'Electrical' },
    { value: 'D & p', viewValue: 'D & p' },
    { value: 'Human Resourse', viewValue: 'Human Resourse' },

  ];

  skills = [
    { value: 'Semi skill', viewValue: 'Semi Skill' },
    { value: 'Semi skill', viewValue: 'Semi Skill' },

  ];

  qualification = [
    { value: 'SSLC', viewValue: 'SSLC' },
    { value: 'Graduate', viewValue: 'Graduate' },
    { value: 'Post Graduate', viewValue: 'Post Graduate' },
  ];

  // checkPattern(data : any):any{
  //   if(this.form.value[data]){
  //     console.log(this.form.controls[data].hasError('pattern'));
  //     return this.form.controls[data].hasError('pattern')
  //   }
  // }

  submit() {
    let payload :any={
      accountDetails: this.accDetail.value,
      departmentDetails:this.depDetail.value,
      emergencyDetails: this.emgDetail.value,
      experienceDetails:this.expDetail.value,
      personalDetails: this.form.value,
      qualificationDetails: this.qualiDetail.value
      }
    if(this.id ){
      payload._id = this.id
    }
    const config ={
      url : this.id ? urls.employee.update + this.id : urls.employee.create,
      payload:payload
    }
    this.apiService.post(config).subscribe(resp=>{
      if(resp.success){
        this.tostService.success(resp.message);
        this.location.back();
      }
    })
  }

  getEmployeeData() {
    // TODO get employee on id.
    const config ={
      url : urls.employee.byId+this.id
    }
    this.apiService.get(config).subscribe(resp=>{
      this.employeeData = resp.result;
      this.prepareForm();
      // this.accDetail.setValue(employee);
    })

  }
  compareFn(a:any, b:any): boolean {
    return a.value === b.value;
  }
  back(){
    this.location.back();
  }
  addressChange(event:any){
    console.log(event,"event")
    this.form.patchValue({ permanentAddress: ''});
    if(event.checked){
      this.form.patchValue({ permanentAddress: this.form.value.presentAddress });
    }
  }

  addExperienceForm(){
   
  }
}

