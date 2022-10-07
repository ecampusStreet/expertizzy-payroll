import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
 

  constructor(
    private router : Router
  ) {}
  ngOnInit(): void {}

  

  employeeList = [
    { 
      profile_photo:'assets/images/profile.jpg',
      empId: 1,
      name:'Gagan',
      designation:'driver',
      department:'driver',
      emailId:'s@gmail.com',
      mobileNo:5346546455,
      TeamLeader:'-',
      Grade:'d',
      gender:'male',
      doj:'21/12/1995',
      dob:'2015',
      bloodgroup:'a',
      fatherName:'hjkshuiad',
      MaritalStatus:'unmarried',
      bankname:'sbi',
      accountno:'xxxxxx122',
      IFSCcode:'sbinooo2',
      UANno:'',
      PanNo:'xxxxx25',
      AadharNo:'xxxxxxx5852',
      qualification:'sslc',
      Experience:'6',
    },
    { 
      profile_photo:'assets/images/profile.jpg',
      empId: 2,
      name:'Ram',
      designation:'driver',
      department:'driver',
      emailId:'s@gmail.com',
      mobileNo:8669246256,
      
      TeamLeader:'-',
      Grade:'d',
      gender:'male',
      doj:'21/12/1995',
      dob:'2015',
      bloodgroup:'a',
      fatherName:'hjkshuiad',
      MaritalStatus:'unmarried',
      bankname:'sbi',
      accountno:'xxxxxx122',
      IFSCcode:'sbinooo2',
      UANno:'',
      PanNo:'xxxxx25',
      AadharNo:'xxxxxxx5852',
      qualification:'sslc',
      Experience:'6',
    },
  ];

  	// Empl ID	Name	designation	Grade	department	Team	department Head	Team Leader	Emp mail id	emp Mobile no	Gender	Date of Joining	Date of Birth	Blood Group	Father Name	Marital Status	Bank Name 	Account no	IFSC code	UAN no	PAN No	AADHAARNo	qualification	Work Experience 	Leave entitalment 


  tableheader=[
    {title:'EmplID'},
    {title:'Name'},
    {title:'Designation'},
    {title:'Department'},
    {title:'MailID'},
    {title:'MobileNo'},
    // {title:'Grade'},
    // {title:'Team'},
    // {title:'departmentHead'},
    // {title:'Team Leader'},
    // {title:'Gender'},
    // {title:'DOF'},
    // {title:'DOJ'},
    // {title:'Blood Group'},
    // {title:'FatherName'},
    // {title:'Martial Status'},
    // {title:'BankName'},
    // {title:'Account Name'},
    // {title:'IFSC code'},
    // {title:'UAN No'},
    // {title:'PAN No'},
    // {title:'Aadhar No'},
    // {title:'Qualification'},
    // {title:'WorkExperience'},
    // {title:'Leave entitalment'},
  ];

  action(event:any){
    console.log(event,"event ");
    switch(event.action){
      case 'edit':
        this.router.navigate(['admin/add-employee'],{queryParams:{id : event.data._id}});
        break;
      case 'delete':
        this.deleteConfirmationpopup();
        break;
    }
  }
  deleteConfirmationpopup(){

  }
  add(){
   this.router.navigate(['admin/add-employee'])
  }
  loadMore(){
  }
}
