import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService, ToastService, UtilsService, urls } from 'src/app/core';
import { FilterFormComponent } from 'src/app/core/components/filter-form/filter-form.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  panelOpenState: boolean = false;
  employeeList:any=[];
  searchText:string='';
  designations:any=[];
  departments:any=[];
  branches:any=[];
  salaryGrades:any=[];
  shifts: any =[];


  count = 0;
  limit = 25;
  page = 1;

  reshuffle!: FormGroup;
  filters = {
    department: '',
    designation: '',
    doj: '',
    gender: '',
    branch: '',
    financialyear: '',
    experience: '',
  };

  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    private utils: UtilsService,
    private matdialog: MatDialog 

  ) { 
  console.log(this.shifts, 'shiftdata')

  }

  async ngOnInit(){
    this.designations = await this.utils.designations();
  this.departments = await this.utils.getDepartments();
  this.branches = await this.utils.branches();
  this.salaryGrades = await this.utils.salaryGrade();
  this.shifts = await this.utils.shifts()
  await this.getEmployees();
  }

search(){
}

onChangeStatus(emp:any,event:any){
  console.log(event,"designation");
  console.log(this.designations,"data")
 let data = this.designations.find((designation:any) => designation._id === event );
 
 console.log(data,"result");
 const config = {
  url:urls.reshuffle.designation + emp._id,
  payload:{
    "emp_id":emp._id,
    "newdesignationId":event,
    "newdesignationName":data.designationName,
  }
}
this.updateReshuffle(config);
}

onChangeDepartment(emp:any,event:any){
  console.log(emp,'employee');
  console.log(this.departments)
 let data = this.departments.find((department:any) => department._id === event );
 console.log(data,"result");
 const config = {
  url:urls.reshuffle.department + emp._id,
  payload:{
    "emp_id":emp._id,
    "newdepartmentId":event,
    "newdept_name":data.departmentName,
  }
}
this.updateReshuffle(config);
}

onChangeBranch(emp:any, event:any){
 let data =this.branches.find((branch:any)=> branch._id === event);
 console.log(data,'data');
 const config = {
  url:urls.reshuffle.branch + emp._id,
  payload:{
    "emp_id":emp._id,
    "newbranchId":event,
    "newbranchName":data.branchName,
  }
 }
this.updateReshuffle(config);

}

onChangeSalaryGrade(emp:any, event:any){
  let data =this.salaryGrades.find((grade:any)=> grade._id === event);
  console.log(data,'data');
  const config = {
   url:urls.reshuffle.grade + emp._id,
   payload:{
     emp_id:emp._id,
     newsalaryGradeId:event,
   }
  }
 this.updateReshuffle(config);
 
 }

 onChangeShift(emp:any, event:any){
  let data =this.shifts.find((shift:any)=> shift._id === event);
  console.log(data,'data');
  const config = {
   url:urls.reshuffle.shift + emp._id,
   payload:{
     emp_id:emp._id,
     newshiftId:event,
   }
  }
 this.updateReshuffle(config);
 
 }


updateReshuffle(config: any){
this.apiService.put(config).subscribe((resp)=>{
  if(resp){
    this.toast.success(resp.message);
  }
})
}
getEmployees(showToast = true) {
  const config = {
    url:
    urls.employee.list +
    '?limit=' +
    this.limit +
    '&page=' +
    this.page +
    '&search=' +
    this.searchText +
    '&department=' +
    this.filters.department +
    '&designation=' +
    this.filters.designation +
    '&doj=' +
    this.filters.doj +
    '&gender=' +
    this.filters.gender +
    '&branch=' +
    this.filters.branch +
    '&financialyear=' +
    this.filters.financialyear +
    '&experience=' +
    this.filters.experience,
  };
  this.apiService.get(config).subscribe((resp) => {
    if (resp.success) {
      this.employeeList = this.employeeList.concat(resp.result.data);
      showToast ? this.toast.success(resp.message) : '';
    } else {
      this.toast.error(resp.message);
    }
  });
}

openPopup(){
  const dialogConfig = new MatDialogConfig();
  const dialogRef = this.matdialog.open(FilterFormComponent, {
    width: '60%',
    data: this.filters,
    
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(result)
    if (result) {
      this.filters.department = result.department ? result.department : '';
      this.filters.designation = result.designation ? result.designation : '';
      this.filters.doj = result.doj ? result.doj : '';
      this.filters.gender = result.gender ? result.gender : '';
      this.filters.branch = result.branch ? result.branch : '';
      this.filters.financialyear = result.financialyear ? result.financialyear: ''  
      this.filters.experience = result.experience ? result.experience : '';
      this.filters = result;
      this.getEmployees();
      this.employeeList = [];
    }
  });
}


}
