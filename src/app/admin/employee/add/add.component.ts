import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import { bloodGroup } from 'src/app/core/constants/data';

@Component({
  selector: 'app-employee',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  selectedDesignation = 'technician';
  form!: FormGroup;
  expDetail!: FormGroup;
  depDetail!: FormGroup;
  emgDetail!: FormGroup;
  accDetail!: FormGroup;
  qualiDetail!: FormGroup;
  emailForm!: FormGroup;
  kycInformation !: FormGroup;
  selectedDepartment:any;
  public validationMsgs = {
    'emailAddress': [{ type: 'email', message: 'Enter a valid email' }]
  }
  title = "Add new employee";
  employeeData :any;
  id:string ='';
  showForm : boolean = false;
  bloodGroups = bloodGroup;
  selectedBloodGroup : string ='';
  expDetailForm!: FormGroup;
  formAdded =  false;
  shifts :any=[];
  departments :any =[];
  branches :any =[];
  designations  :any =[];
  genders = [{label:'Male', value:'male'},{label:'Female', value:'female'},{label:'Others', value:'other'}];

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private apiService : ApiService,
    private tostService : ToastService,
    private location : Location,
    private fb: FormBuilder,
    private utils : UtilsService,
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
        this.getEmployeeData();
      } else {
        this.prepareForm();
      }
    });
  }

  async ngOnInit() {
  this.departments = await this.utils.getDepartments();
  console.log( this.departments ," this.departments ");
  this.shifts = await this.utils.getShifts();
  this.branches = await this.utils.branches();
  this.designations = await this.utils.designations();
  }
  onDepartmentChange(department : any){
    this.selectedDepartment = department;
  }
 
  prepareForm(){
    this.form = new FormGroup({
      profilePic: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].profilePic :'',[]),
      firstName: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].firstName :'', [Validators.required]),
      lastName: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].lastName :'', [Validators.required]),
      middleName: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].middleName :'', [Validators.required]),
      dob: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].dob :'', [Validators.required]),
      gender: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].gender :'', [Validators.required]),
      ph_no: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].ph_no :'', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].email :'', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      bloodGroup: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].bloodGroup :'', [Validators.required]),
      // aadhara_no: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].aadhara_no :'', [Validators.required]),
      presentAddress: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].presentAddress :'', [Validators.required]),
      permanentAddress: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].permanentAddress :'', [Validators.required]),
    });

    this.kycInformation = new FormGroup({
      aadhaarNumber: new FormControl(this.employeeData && this.employeeData.kycInformation? this.employeeData.kycInformation.aadhaarNumber :'', []),
      panCardNumber: new FormControl(this.employeeData && this.employeeData.kycInformation? this.employeeData.kycInformation.panCardNumber :'', []),
      drivingLicence: new FormControl(this.employeeData && this.employeeData.kycInformation? this.employeeData.kycInformation.drivingLicence :'', []),
      passportNumber: new FormControl(this.employeeData && this.employeeData.kycInformation? this.employeeData.kycInformation.passportNumber :'', []),
      voterId: new FormControl(this.employeeData && this.employeeData.kycInformation? this.employeeData.kycInformation.voterId :'', []),
    });
    this.selectedDesignation =this.employeeData && this.employeeData.experienceDetails[0]? this.employeeData.experienceDetails[0].designation:'';
    this.expDetail = this.fb.group({
     experDetails: this.fb.array([])
   });
      this.depDetail = this.fb.group({
        department: this.fb.array([])
      });
      this.qualiDetail = this.fb.group({
        qualifications: this.fb.array([])
      });
      this.emgDetail = this.fb.group({
        emergency: this.fb.array([])
      });

    this.accDetail = new FormGroup({
      acc_number: new FormControl(
        this.employeeData && this.employeeData.accountDetails[0]
          ? this.employeeData.accountDetails[0].acc_number
          : '',
        [Validators.required]
      ),
      branch: new FormControl(
        this.employeeData && this.employeeData.accountDetails[0]
          ? this.employeeData.accountDetails[0].branch
          : '',
        [Validators.required]
      ),
      ifscCode: new FormControl(
        this.employeeData && this.employeeData.accountDetails[0]
          ? this.employeeData.accountDetails[0].ifscCode
          : '',
        [Validators.required]
      ),
      uan_no: new FormControl(
        this.employeeData && this.employeeData.accountDetails[0]
          ? this.employeeData.accountDetails[0].uan_no
          : '',
        [Validators.required]
      ),
      panCard: new FormControl(
        this.employeeData && this.employeeData.accountDetails[0]
          ? this.employeeData.accountDetails[0].panCard
          : '',
        [Validators.required]
      ),
    });
    this.showForm = true;
    this.addFeildsFirstTime();
  }
  get f() {
    return this.form.controls;
  }
  get kycControls() {
    return this.kycInformation.controls;
  }
  get experDetails() {
    return <FormArray>this.expDetail.controls["experDetails"] as FormArray;
  }
  get department() {
    return <FormArray>this.depDetail.controls["department"] as FormArray;
  }
  get qualifications() {
    return <FormArray>this.qualiDetail.controls["qualifications"] as FormArray;
  }
  get emergency() {
    return <FormArray>this.emgDetail.controls["emergency"] as FormArray;
  }
  courseList=[{
    label:'SSLC',
    value:'sslc'
  },
  {
    label:'PUC',
    value:'puc'
  },
  {
    label:'Diploma / UG',
    value:'ug'
  },
  {
    label:'Graduation',
    value:'graduation'
  },
  {
    label:'Post graduation',
    value:'pg'
  }];


  // checkPattern(data : any):any{
  //   if(this.form.value[data]){
  //     console.log(this.form.controls[data].hasError('pattern'));
  //     return this.form.controls[data].hasError('pattern')
  //   }
  // }


  getEmployeeData() {
    const config ={
      url : urls.employee.byId+this.id
    }
    this.apiService.get(config).subscribe(resp=>{
      this.employeeData = resp.result;
      this.prepareForm();
    });
  }
  addressChange(event:any){
    this.form.patchValue({ permanentAddress: ''});
    if(event.checked){
      this.form.patchValue({ permanentAddress: this.form.value.presentAddress });
    }
  }
  back(){
    this.location.back();
  }
 

  addFeilds(field:any) {
  let fields :any ='';
    switch(field){
      case 'experience':
        fields = this.fb.group({
          companyName: new FormControl('', [Validators.required]),
          yearOfExp: new FormControl('', [Validators.required]),
          old_designation: new FormControl('', [Validators.required]),
          start_date: new FormControl('', [Validators.required]),
          end_date: new FormControl('', [Validators.required]),
          files:new FormControl([]),
        });
        this.experDetails.push(fields);
        break;
      case 'department' :
        fields = this.fb.group({
          dept_name: new FormControl('', [Validators.required]),
          teamLeader: new FormControl('', [Validators.required]),
          doj: new FormControl('', [Validators.required]),
          shift: new FormControl('', []),
          reportingManager:new FormControl('', [Validators.required]),
          projectManager:new FormControl('', [Validators.required]),
          departmentId: new FormControl('', []),
          designationId: new FormControl('', []),
          designationName:new FormControl('', [Validators.required]),
          financialYear:new FormControl('', [Validators.required]),
          branch:new FormControl('', [Validators.required]),
          deputy_id:new FormControl('', []),
          experience:new FormControl('', [Validators.required]),
        })
        this.department.push(fields);
        break;
        case 'qualification' :
        fields = this.fb.group({
            course: new FormControl('', [Validators.required]),
            yearOfPassing: new FormControl('', [Validators.required]),
            obtainedMarks: new FormControl('', [Validators.required]),
            totalMarks: new FormControl('', [Validators.required]),
            board :new FormControl('', [Validators.required]),
            specialization:new FormControl(''),
            files:new FormControl([])
        })
        this.qualifications.push(fields);
        break;
        case 'emergency' :
          fields = this.fb.group({
            name: new FormControl('',[Validators.required]),
            relation_with: new FormControl('',[Validators.required]),
            age: new FormControl('',[Validators.required]),
            address: new FormControl('',[Validators.required]),
            contact_no: new FormControl('',[Validators.required]),
          })
          this.emergency.push(fields);
          break;
    }
   
  }
  
  addFeildsFirstTime(){
    if(this.employeeData && this.employeeData.experienceDetails){
      this.employeeData.experienceDetails.forEach((element:any) => {
        let fieldsExp = this.fb.group({
          companyName: new FormControl(element.companyName, [Validators.required]),
          yearOfExp: new FormControl(element.yearOfExp, [Validators.required]),
          old_designation: new FormControl(element.old_designation, [Validators.required]),
          start_date: new FormControl(element.start_date, [Validators.required]),
          end_date: new FormControl(element.end_date, [Validators.required]),
          files:new FormControl(element.files),
        });
        this.experDetails.push(fieldsExp);
      });
    }else{
    let  fields = this.fb.group({
        companyName: new FormControl('', [Validators.required]),
        yearOfExp: new FormControl('', [Validators.required]),
        old_designation: new FormControl('', [Validators.required]),
        start_date: new FormControl('', [Validators.required]),
          end_date: new FormControl('', [Validators.required]),
          files:new FormControl([]),
      });
      this.experDetails.push(fields);
    }
    if(this.employeeData && this.employeeData.departmentDetails){
      this.employeeData.departmentDetails.forEach((element:any) => {
      let fieldsDep = this.fb.group({
        dept_name: new FormControl(element.dept_name, [Validators.required]),
        teamLeader: new FormControl(element.teamLeader, [Validators.required]),
        doj: new FormControl(element.doj, [Validators.required]),
        shift: new FormControl(element.shift, []),
        reportingManager:new FormControl(element.reportingManager, [Validators.required]),
        projectManager:new FormControl(element.projectManager, [Validators.required]),
        departmentId: new FormControl(element.departmentId, []),
        designationId: new FormControl(element.designationId, []),
        designationName:new FormControl(element.designationName, [Validators.required]),
        financialYear:new FormControl(element.financialYear, [Validators.required]),
        branch:new FormControl(element.branch, [Validators.required]),
        deputy_id:new FormControl(element.deputy_id, []),
        experience:new FormControl(element.experience, [Validators.required]),
        })
        this.department.push(fieldsDep);
      })
    }else{
      let fieldsDep = this.fb.group({
        dept_name: new FormControl('', [Validators.required]),
          teamLeader: new FormControl('', [Validators.required]),
          doj: new FormControl('', [Validators.required]),
          shift: new FormControl('', []),
          reportingManager:new FormControl('', [Validators.required]),
          projectManager:new FormControl('', [Validators.required]),
          departmentId: new FormControl('', []),
          designationId: new FormControl('', []),
          designationName:new FormControl('', [Validators.required]),
          financialYear:new FormControl('', [Validators.required]),
          branch:new FormControl('', [Validators.required]),
          deputy_id:new FormControl('', []),
          experience:new FormControl('', [Validators.required]),
        })
        this.department.push(fieldsDep);
    }
    if(this.employeeData && this.employeeData.qualificationDetails){
      this.employeeData.qualificationDetails.forEach((element:any) => {
     let fieldQulification = this.fb.group({
        course: new FormControl(element.course, [Validators.required]),
        yearOfPassing: new FormControl(element.yearOfPassing, [Validators.required]),
        board :new FormControl(element.board, [Validators.required]),
        specialization:new FormControl(element.specialization),
        obtainedMarks: new FormControl(element.obtainedMarks, [Validators.required]),
        totalMarks: new FormControl(element.totalMarks, [Validators.required]),
        files:new FormControl(element.files)
    })
    this.qualifications.push(fieldQulification);
  })
  }else{
    let fields = this.fb.group({
      course: new FormControl('', [Validators.required]),
      yearOfPassing: new FormControl('', [Validators.required]),
      obtainedMarks: new FormControl('', [Validators.required]),
      totalMarks: new FormControl('', [Validators.required]),
      board :new FormControl('', [Validators.required]),
      specialization:new FormControl(''),
      files:new FormControl([])
  })
  this.qualifications.push(fields);
  }

  if(this.employeeData && this.employeeData.emergencyDetails){
    this.employeeData.emergencyDetails.forEach((element:any) => {
      let fields = this.fb.group({
        name: new FormControl(element.name,[Validators.required]),
        relation_with: new FormControl(element.relation_with,[Validators.required]),
        age: new FormControl(element.age,[Validators.required]),
        address: new FormControl(element.address,[Validators.required]),
        contact_no: new FormControl(element.contact_no,[Validators.required]),
      })
      this.emergency.push(fields);
   })
  }else{
    let fields = this.fb.group({
      name: new FormControl('',[Validators.required]),
      relation_with: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      contact_no: new FormControl('',[Validators.required]),
    })
    this.emergency.push(fields);
  }
}
  deleteFeild(lessonIndex: number,field:string) {
    switch(field){
      case 'experience':
    this.experDetails.removeAt(lessonIndex);
    break;
    case 'department':
      this.department.removeAt(lessonIndex);
      break;
      case 'qualification':
        this.qualifications.removeAt(lessonIndex);
        break;
    }
}

submit() {
  let payload: any = {
    accountDetails: this.accDetail.value,
    departmentDetails: this.depDetail.value.department,
    emergencyDetails: this.emgDetail.value,
    experienceDetails: this.expDetail.value.experDetails,
    personalDetails: this.form.value,
    qualificationDetails: this.qualiDetail.value.qualifications,
    kycInformation: this.kycInformation.value
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
      // this.location.back();
    }
  });
}
uploadImage(e:any){
  let formData = new FormData();
    if (e.target.files && e.target.files[0]) {
      Array.from(e.target.files).forEach((file: any) => {
        formData.append('files',file)
      });
      const config ={
        url : urls.files.upload,
        payload:formData
      }
      this.apiService.post(config).subscribe(resp =>{
        if(this.form.value.profilePic && this.form.value.profilePic._id){
          this.deleteFile(this.form.value.profilePic,resp.result[0]);
        }else{
          this.form.value.profilePic = resp.result[0];
          if(this.id) {
          this.submit();
        }
        }
      })
    }
}
deleteFile(old:any, newObj : any){
  const config ={
    url: urls.files.deleteFileById + old._id
  }
  this.apiService.delete(config).subscribe(resp =>{
    this.form.value.profilePic = newObj;
   if(this.id) {
    this.submit();
  }
  })
}
}
