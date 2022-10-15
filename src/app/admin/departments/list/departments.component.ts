import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  list:any=[];
  displayedColumns: string[] = ['departmentId', 'name','location','departmentHead','actions'];
  count =0;
  page=1;
  limit=15;
  constructor(
    private apiService : ApiService,
    private toastService : ToastService,
    private router : Router,
    private utilsService : UtilsService
  ) { }

  ngOnInit(): void {
    this.getDepartments();
  }
  getDepartments(){
    const config={
      url: urls.departments.list+'?limit='+this.limit + '&page=' +this.page
    }
    this.apiService.get(config).subscribe(data =>{
      this.list = this.list.concat(data.result.data);
    })
  }
  action(data:any,action:any){
    switch(action){
      case 'edit':
        // this.router.navigate(['admin/employee/add'],{queryParams:{id :data._id}});
        this.noImplemented();
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
        case 'view':
          // this.router.navigate(['admin/employee/view',data._id]);
          this.noImplemented();
          break;
        
    }
  }
  add(){
    this.noImplemented();
  }
  loadMore(){
    this.count =0;
    this.page =this.page + 1;
    this.getDepartments();
  }
  deleteConfirmationpopup(event:any){
    let data = {
      header:"",
      message:"Are you sure, you want to delete this department?"
    }
  this.utilsService.openDialog(data).then(resp =>{
      if(resp){
        this.delete(event);
      }
    })
  }
  delete(event:any){
    const config ={
      url : urls.departments.delete + event._id
    }
    this.apiService.delete(config).subscribe(resp =>{
      if(resp.success){
        this.toastService.success(resp.message);
        this.list =[];
        this.getDepartments();
      }
    })
  }

  noImplemented(){
    this.toastService.error('This functionality not yet implemented.');
  }
}
