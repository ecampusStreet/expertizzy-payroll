import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
 

  constructor() {}
  ngOnInit(): void {}

  EmployeeList = [
    { 
      EmplID: 1,
      name:'Gagan',
      Designation:'driver',
      Department:'driver',
      emailId:'s@gmail.com',
      mobileNo:5346546,
      
      
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
    }
  ];

  	// Empl ID	Name	Designation	Grade	Department	Team	department Head	Team Leader	Emp mail id	emp Mobile no	Gender	Date of Joining	Date of Birth	Blood Group	Father Name	Marital Status	Bank Name 	Account no	IFSC code	UAN no	PAN No	AADHAARNo	qualification	Work Experience 	Leave entitalment 


  tableheader=[
    {title:'EmplID'},
    {title:'Name'},
    {title:'Designation'},
    {title:'Department'},
    {title:'MailID'},
    {title:'MobileNo'},
    
    // {title:'Grade'},
    // {title:'Team'},
    // {title:'DepartmentHead'},
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

}
