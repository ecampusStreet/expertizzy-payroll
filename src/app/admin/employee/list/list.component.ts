import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title="Employee list"
  count =0;
  limit =25;
  page =1;
  employeeList = [];
  searchText:any ='';

  constructor(
    private router : Router,
    private apiService : ApiService,
    private toast : ToastService,
    private utilsService:UtilsService,
    private routerParams : ActivatedRoute
  ) {
    routerParams.queryParams.subscribe((params) =>{
      console.log(params,"params");
    })
  }
  
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(showToast = true){
    const config ={
      url:urls.employee.list+'?limit='+this.limit + '&page=' +this.page+'&search='+this.searchText
    }
    this.apiService.get(config).subscribe(resp =>{
      if(resp.success){
        this.employeeList =   this.employeeList.concat(resp.result.data);
        this.count = resp.result.count;
        showToast ? this.toast.success(resp.message):'';
      }else{
        this.toast.error(resp.message);
      }
    })
  }


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
    switch(event.action){
      case 'edit':
        this.router.navigate(['expertizzy/employee/add'],{queryParams:{id : event.data._id}});
        break;
      case 'delete':
        this.deleteConfirmationpopup(event.data);
        break;
        case 'view':
          this.router.navigate(['expertizzy/employee/view',event.data._id]);
          break;
        
    }
  }

  deleteConfirmationpopup(event:any){
    let data = {
      header:"",
      message:"Are you sure, you want to delete this employee?"
    }
  this.utilsService.openDialog(data).then(resp =>{
      if(resp){
        this.delete(event);
      }
    })
  }
  add(){
   this.router.navigate(['expertizzy/employee/add'])
  }
  loadMore(){
    this.count =0;
    this.page =this.page + 1;
    this.getEmployees();
  }
  search(){
    this.count =0;
    this.page = 1;
    this.employeeList=[];
    this.getEmployees();
  }
  delete(event:any){
    const config ={
      url : urls.employee.delete + event._id
    }
    this.apiService.delete(config).subscribe(resp =>{
      if(resp.success){
        this.toast.success(resp.message);
        this.employeeList=[];
        this.getEmployees(false);
      }
    })
  }
}
