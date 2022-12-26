import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import { bloodGroup } from 'src/app/core/constants/data';

@Component({
  selector: 'app-employee',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  form!: FormGroup;
  expDetail!: FormGroup;
  depDetail!: FormGroup;
  emgDetail!: FormGroup;
  accDetail!: FormGroup;
  qualiDetail!: FormGroup;
  emailForm!: FormGroup;
  kycInformation !: FormGroup;
  shift !: FormGroup;


  selectedDepartment: any = {};
  selectedBranch: any = {};
  selectedShift: any = {};
  selectedDesignation: any = {};
  public validationMsgs = {
    'emailAddress': [{ type: 'email', message: 'Enter a valid email' }]
  }
  title = "Add new employee";
  employeeData: any;
  id: string = '';
  showForm: boolean = false;
  bloodGroups = bloodGroup;
  selectedBloodGroup: string = '';
  expDetailForm!: FormGroup;
  formAdded =  false;
  shifts :any=[];
  departments :any =[];
  branches :any =[];
  designations  :any =[];
  roles:any =[];
  genders = [{label:'Male', value:'male'},{label:'Female', value:'female'},{label:'Others', value:'other'}];
  salaryGrade :any;
  readOnly : boolean = false;
  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private apiService: ApiService,
    private tostService: ToastService,
    private location: Location,
    private fb: FormBuilder,
    private utils: UtilsService,
  ) {
    routerParams.queryParams.subscribe((params: any) => {
      this.readOnly = params.readOnly &&   params.readOnly == 'true'? true : false ;
      if (params.id) {
        this.id = params.id;
        this.getEmployeeData();
      } else {
        this.prepareForm();
      }
    });
  }

  async ngOnInit() {
    this.designations = await this.utils.designations();
    this.departments = await this.utils.getDepartments();
    this.shifts = await this.utils.getShifts();
    this.branches = await this.utils.branches();
    this.roles = await this.utils.getRoles();
    this.salaryGrade = await this.utils.salaryGrade();
  }
  onDepartmentChange(department: Event) {
    let data = this.departments.find((t: any) => t._id === department);
    this.depDetail.value.dept_name = data.departmentName;
  }
  onShiftChange(shift: Event) {
    let data = this.shifts.find((t: any) => t._id === shift);
    this.shift.value.shift = data.shift_name;
  }
  onDesignationChange(designation: Event) {
    let data = this.designations.find((t: any) => t._id === designation);
    this.depDetail.value.designationName = data.designationName;
  }
  onBranchChange(branch: Event) {
    let data = this.branches.find((t: any) => t._id === branch);
    this.depDetail.value.branch = data.branchName;
  }
  prepareForm(){
    this.form = new FormGroup({
      profilePic: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].profilePic : '', []),
      firstName: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].firstName : '', [Validators.required]),
      lastName: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].lastName : '', [Validators.required]),
      fatherName: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].fatherName : '', [Validators.required]),
      dob: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].dob : '', [Validators.required]),
      gender: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].gender : '', [Validators.required]),
      ph_no: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].ph_no : '', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].email : '', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      bloodGroup: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].bloodGroup : '', [Validators.required]),
      // aadhara_no: new FormControl(this.employeeData && this.employeeData.personalDetails[0]? this.employeeData.personalDetails[0].aadhara_no :'', [Validators.required]),
      presentAddress: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].presentAddress : '', [Validators.required]),
      permanentAddress: new FormControl(this.employeeData && this.employeeData.personalDetails[0] ? this.employeeData.personalDetails[0].permanentAddress : '', [Validators.required]),
    });
    this.shift = new FormGroup({
      shift : new FormControl(this.employeeData && this.employeeData.shift? this.employeeData.shift:'', []),
      salaryGrade : new FormControl(this.employeeData && this.employeeData.salaryGrade? this.employeeData.salaryGrade:'', []),
      role : new FormControl(this.employeeData && this.employeeData.role? this.employeeData.role:'', []),
      annualSalary :new FormControl(this.employeeData && this.employeeData.annualSalary? this.employeeData.annualSalary:'', []),
    })

    this.kycInformation = new FormGroup({
      aadhaarNumber: new FormControl(this.employeeData && this.employeeData.kycInformation ? this.employeeData.kycInformation.aadhaarNumber : '', [Validators.required]),
      panCardNumber: new FormControl(this.employeeData && this.employeeData.kycInformation ? this.employeeData.kycInformation.panCardNumber : '', []),
      drivingLicence: new FormControl(this.employeeData && this.employeeData.kycInformation ? this.employeeData.kycInformation.drivingLicence : '', []),
      passportNumber: new FormControl(this.employeeData && this.employeeData.kycInformation ? this.employeeData.kycInformation.passportNumber : '', []),
      voterId: new FormControl(this.employeeData && this.employeeData.kycInformation ? this.employeeData.kycInformation.voterId : '', []),
    });
    this.selectedDesignation = this.employeeData && this.employeeData.experienceDetails[0] ? this.employeeData.experienceDetails[0].designation : '';
    this.expDetail = this.fb.group({
      experDetails: this.fb.array([])
    });
    this.depDetail = new FormGroup({
      dept_name: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].dept_name : '', []),
      teamLeader: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].teamLeader : '', []),
      doj: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].doj : '', []),
      shift: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].shift : '', []),
      reportingManager: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].reportingManager : '', []),
      projectManager: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].projectManager : '', []),
      departmentId: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].departmentId : '', []),
      designationId: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].designationId : '', []),
      designationName: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].dept_name : '', []),
      financialYear: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].financialYear : '', []),
      branchId: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].branchId : '', []),
      branch: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].branch : '', []),
      deputy_id: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].deputy_id : '', []),
      experience: new FormControl(this.employeeData && this.employeeData.departmentDetails[0] ? this.employeeData.departmentDetails[0].experience : '', []),
    });
    console.log(this.depDetail.value, "this.depDetail");
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
    if(this.readOnly){
      this.form.disable();
      this.accDetail.disable();
      this.emgDetail.disable();
      this.expDetail.disable();
      this.depDetail.disable();
      this.kycInformation.disable();
      this.qualiDetail.disable();
      this.shift.disable();
    }
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
  courseList = [{
    label: 'SSLC',
    value: 'sslc'
  },
  {
    label: 'PUC',
    value: 'puc'
  },
  {
    label: 'Diploma / UG',
    value: 'ug'
  },
  {
    label: 'Graduation',
    value: 'graduation'
  },
  {
    label: 'Post graduation',
    value: 'pg'
  }];


  // checkPattern(data : any):any{
  //   if(this.form.value[data]){
  //     console.log(this.form.controls[data].hasError('pattern'));
  //     return this.form.controls[data].hasError('pattern')
  //   }
  // }


  getEmployeeData() {
    const config = {
      url: urls.employee.byId + this.id
    }
    this.apiService.get(config).subscribe(resp => {
      this.employeeData = resp.result;
      this.prepareForm();
    });
  }
  addressChange(event: any) {
    this.form.patchValue({ permanentAddress: '' });
    if (event.checked) {
      this.form.patchValue({ permanentAddress: this.form.value.presentAddress });
    }
  }
  back() {
    this.location.back();
  }


  addFeilds(field: any) {
    let fields: any = '';
    switch (field) {
      case 'experience':
        fields = this.fb.group({
          companyName: new FormControl('', []),
          yearOfExp: new FormControl('', []),
          old_designation: new FormControl('', []),
          start_date: new FormControl('', []),
          end_date: new FormControl('', []),
          files: new FormControl([]),
        });
        this.experDetails.push(fields);
        break;

      case 'qualification':
        fields = this.fb.group({
          course: new FormControl('', [Validators.required]),
          yearOfPassing: new FormControl('', [Validators.required]),
          obtainedMarks: new FormControl('', [Validators.required]),
          totalMarks: new FormControl('', [Validators.required]),
          board: new FormControl('', [Validators.required]),
          specialization: new FormControl(''),
          files: new FormControl([])
        })
        this.qualifications.push(fields);
        break;
      case 'emergency':
        fields = this.fb.group({
          name: new FormControl('', []),
          relation_with: new FormControl('', []),
          age: new FormControl('', []),
          address: new FormControl('', []),
          contact_no: new FormControl('', []),
        })
        this.emergency.push(fields);
        break;
    }

  }

  addFeildsFirstTime() {
    if (this.employeeData && this.employeeData.experienceDetails) {
      this.employeeData.experienceDetails.forEach((element: any) => {
        let fieldsExp = this.fb.group({
          companyName: new FormControl(element.companyName, []),
          yearOfExp: new FormControl(element.yearOfExp, []),
          old_designation: new FormControl(element.old_designation, []),
          start_date: new FormControl(element.start_date, []),
          end_date: new FormControl(element.end_date, []),
          files: new FormControl(element.files),
        });
        this.experDetails.push(fieldsExp);
      });
    } else {
      let fields = this.fb.group({
        companyName: new FormControl('', []),
        yearOfExp: new FormControl('', []),
        old_designation: new FormControl('', []),
        start_date: new FormControl('', []),
        end_date: new FormControl('', []),
        files: new FormControl([]),
      });
      this.experDetails.push(fields);
    }

    if (this.employeeData && this.employeeData.qualificationDetails) {
      this.employeeData.qualificationDetails.forEach((element: any) => {
        let fieldQulification = this.fb.group({
          course: new FormControl(element.course, [Validators.required]),
          yearOfPassing: new FormControl(element.yearOfPassing, [Validators.required]),
          board: new FormControl(element.board, [Validators.required]),
          specialization: new FormControl(element.specialization),
          obtainedMarks: new FormControl(element.obtainedMarks, [Validators.required]),
          totalMarks: new FormControl(element.totalMarks, [Validators.required]),
          files: new FormControl(element.files)
        })
        this.qualifications.push(fieldQulification);
      })
    } else {
      let fields = this.fb.group({
        course: new FormControl('', [Validators.required]),
        yearOfPassing: new FormControl('', [Validators.required]),
        obtainedMarks: new FormControl('', [Validators.required]),
        totalMarks: new FormControl('', [Validators.required]),
        board: new FormControl('', [Validators.required]),
        specialization: new FormControl(''),
        files: new FormControl([])
      })
      this.qualifications.push(fields);
    }

    if (this.employeeData && this.employeeData.emergencyDetails) {
      this.employeeData.emergencyDetails.forEach((element: any) => {
        let fields = this.fb.group({
          name: new FormControl(element.name, []),
          relation_with: new FormControl(element.relation_with, []),
          age: new FormControl(element.age, []),
          address: new FormControl(element.address, []),
          contact_no: new FormControl(element.contact_no, []),
        })
        this.emergency.push(fields);
      })
    } else {
      let fields = this.fb.group({
        name: new FormControl('', []),
        relation_with: new FormControl('', []),
        age: new FormControl('', []),
        address: new FormControl('', []),
        contact_no: new FormControl('', []),
      })
      this.emergency.push(fields);
    }
  }
  deleteFeild(lessonIndex: number, field: string) {
    switch (field) {
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
      departmentDetails: this.depDetail.value,
      emergencyDetails: this.emgDetail.value.emergency,
      experienceDetails: this.expDetail.value.experDetails,
      personalDetails: this.form.value,
      qualificationDetails: this.qualiDetail.value.qualifications,
      kycInformation: this.kycInformation.value,
      shift: this.shift.value.shift,
      salaryGrade: this.shift.value.salaryGrade
    }
    if (this.id) {
      payload._id = this.id
    }
    const config = {
      url: this.id ? urls.employee.update + this.id : urls.employee.create,
      payload: payload
    }
    this.apiService.post(config).subscribe(resp => {
      if (resp.success) {
        this.tostService.success(resp.message);
        this.location.back();
      }
    });
  }
  uploadImage(e: any) {
    let formData = new FormData();
    if (e.target.files && e.target.files[0]) {
      Array.from(e.target.files).forEach((file: any) => {
        formData.append('files', file)
      });
      const config = {
        url: urls.files.upload,
        payload: formData
      }
      this.apiService.post(config).subscribe(resp => {
        if (this.form.value.profilePic && this.form.value.profilePic._id) {
          this.deleteFile(this.form.value.profilePic, resp.result[0]);
        } else {
          this.form.value.profilePic = resp.result[0];
          if (this.id) {
            this.submit();
          }
        }
      })
    }
  }
  deleteFile(old: any, newObj: any) {
    const config = {
      url: urls.files.deleteFileById + old._id
    }
    this.apiService.delete(config).subscribe(resp => {
      this.form.value.profilePic = newObj;
      if (this.id) {
        this.submit();
      }
    })
  }

  getDocument(data: any) {
    this.router.navigate(['expertizzy/document'], {
      queryParams: { id: data._id },
    })

  }


  setValue(title:string) {
    const config = {
      url: urls.employee.list,
      title:title
    };
    this.utils.dataFilter(config).then((resp) => {
      if (resp) {
        if(title === 'Select team leader'){
          this.depDetail.patchValue({
            teamLeader:
              resp.firstName + ' ' + resp.fatherName + ' ' + resp.lastName,
          });
        }
        if(title === 'Select reporting manager'){
          this.depDetail.patchValue({
            reportingManager:
              resp.firstName + ' ' + resp.fatherName + ' ' + resp.lastName,
          });
        }
        if(title === 'Select project manager'){
          this.depDetail.patchValue({
            projectManager:
              resp.firstName + ' ' + resp.fatherName + ' ' + resp.lastName,
          });
        }
      }
    });
  }
}
