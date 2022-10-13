import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-employee',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

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
  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private apiService : ApiService,
    private tostService : ToastService
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      // console.log(params.id);
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
    this.form = new FormGroup({
      // deputy_id: new FormControl('', [Validators.required]),
      fullName: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].fullName :'', [Validators.required]),
      fatherName: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].fatherName :'', [Validators.required]),
      dob: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].dob :'', [Validators.required]),
      ph_no: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].ph_no :'', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].email :'', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      bloodGroup: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].bloodGroup :'', [Validators.required]),
      aadhara_no: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].aadhara_no :'', [Validators.required]),
      address: new FormControl(this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].address :'', [Validators.required]),
    });

    this.expDetail = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      yearOfExp: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
    });

    this.depDetail = new FormGroup({
      dept_name: new FormControl('', [Validators.required]),
      // team:new FormControl('',[Validators.required]),
      teamLeader: new FormControl('', [Validators.required]),
      doj: new FormControl('', [Validators.required]),
    });

    this.emgDetail = new FormGroup({
      name: new FormControl( '', [Validators.required]),
      relation_with: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      contact_no: new FormControl('', [Validators.required]),
    });
    this.accDetail = new FormGroup({
      acc_number: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
      ifscCode: new FormControl('', [Validators.required]),
      uan_no: new FormControl('', [Validators.required]),
      panCard: new FormControl('', [Validators.required]),
    });
    this.qualiDetail = new FormGroup({
      sslc: new FormGroup({
        yearOfPassing: new FormControl('', [Validators.required]),
        marks: new FormControl('', [Validators.required]),
      }),
      puc: new FormGroup({
        yearOfPassing: new FormControl('', [Validators.required]),
        marks: new FormControl('', [Validators.required]),
        specialization: new FormControl('', [Validators.required]),
      }),
      degree: new FormGroup({
        yearOfPassing: new FormControl('', [Validators.required]),
        marks: new FormControl('', [Validators.required]),
        specialization: new FormControl('', [Validators.required]),
      }),
    })
    this.showForm = true;
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value)
  }

  gender = ["male", "female"];

  Designation = [
    { value: 'M/C Operator', viewValue: 'M/C Operator' },
    { value: 'Fitter', viewValue: 'Fitter' },
    { value: 'Welder', viewValue: 'Welder' },
    { value: 'House Keeping', viewValue: 'House Keeping' },
    { value: 'Asst.Fitter', viewValue: 'Asst.Fitter' },
    { value: 'Office Boy', viewValue: 'Office Boy' },
    { value: 'Trainee', viewValue: 'Trainee' },
    { value: 'Operator', viewValue: 'Operator' },
    { value: 'Sharing M/C Asst', viewValue: 'Sharing M/C Asst' },
    { value: 'Store Keeper', viewValue: 'Store Keeper' },
    { value: 'Grinder', viewValue: 'Grinder' },
    { value: 'Hydro Helper', viewValue: 'Hydro Helper' },
    { value: 'Trainee Welder', viewValue: 'Trainee welder' },
    { value: 'Helper', viewValue: 'Helper' },
    { value: 'Driver', viewValue: 'Driver' },
    { value: 'Electriction', viewValue: 'Electriction' },
    { value: 'Technician', viewValue: 'Technician' },
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
    console.log(this.form.value, "value");
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
      url : this.id ? urls.employee.byId + this.id : urls.employee.create,
      payload:payload
    }
    this.apiService.post(config).subscribe(resp=>{
      if(resp.success){
        this.tostService.success(resp.message);
        this.router.navigate(['admin/employee/add'],{queryParams:{id: resp.result._id}});
      }
      console.log(resp,"resp");
    })
  }

  getEmployeeData() {
    // TODO get employee on id.
    const config ={
      url : urls.employee.byId+this.id
    }
    this.apiService.get(config).subscribe(resp=>{
      this.employeeData = resp.result.data;
      console.log(resp,"resp get");
      this.prepareForm();
    })

  }
}

