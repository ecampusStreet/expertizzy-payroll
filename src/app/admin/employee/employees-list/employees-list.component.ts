import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
 

  constructor(
    private router : Router,
    private apiService : ApiService,
    private toast : ToastService
  ) {}
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    const config ={
      url:urls.employee.list
    }
    this.apiService.get(config).subscribe(resp =>{
      if(resp.success){
        this.employeeList = resp.result.data;
        this.toast.success(resp.message);
      }else{
        this.toast.error(resp.message);
      }
    })
  }

  employeeList = [];

  	// Empl ID	Name	designation	Grade	department	Team	department Head	Team Leader	Emp mail id	emp Mobile no	Gender	Date of Joining	Date of Birth	Blood Group	Father Name	Marital Status	Bank Name 	Account no	IFSC code	UAN no	PAN No	AADHAARNo	qualification	Work Experience 	Leave entitalment 


  tableheader=[
    {title:'EmplID'},
    {title:'Name'},
    {title:'Designation'},
    {title:'Department'},
    {title:'MailID'},
    {title:'MobileNo'}
  ];

  action(event:any){
    console.log(event,"event ");
    switch(event.action){
      case 'edit':
        this.router.navigate(['admin/employee/add'],{queryParams:{id : event.data._id}});
        break;
      case 'delete':
        this.deleteConfirmationpopup();
        break;
    }
  }
  deleteConfirmationpopup(){

  }
  add(){
   this.router.navigate(['admin/employee/add'])
  }
  loadMore(){
  }
}
