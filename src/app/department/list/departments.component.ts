import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from 'src/app/core/constants/urlConstants';
import { UtilsService } from 'src/app/core/services';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastService } from 'src/app/core/services/toast.service';
// import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  searchText="";
  list:any=[];
  displayedColumns: string[] = ['departmentId', 'name','location','departmentHead','actions'];
  count =0;
  page=1;
  limit=25;
  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  search(){
    this.count = 0;
    this.page = 1;
    this.list = [];
    this.getDepartments();
  }
  getDepartments() {
    const config = {
      url:
        urls.departments.list + '?limit=' + this.limit + '&page=' + this.page + '&deparmentId=' + this.searchText + '&departmentName='+ this.searchText ,
    };
    this.apiService.get(config).subscribe((data) => {
      if(data){
        this.list = this.list.concat(data.result.data);
      this.count = data.result.count;
      this.toastService.success(data.message)
      }
      else{
        this.toastService.error(data.message);
      }
      
    });
  }
  action(data: any, action: any) {
    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/department/add'],{queryParams:{id :data._id}});
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
        case 'view':
          this.router.navigate(['expertizzy/department/add'],{queryParams:{id :data._id, readOnly:true}});
          break;
        
    }
  }
  add(){
    this.router.navigate(['expertizzy/department/add']);
  }
  loadMore() {
    this.count = 0;
    this.page = this.page + 1;
    this.getDepartments();
  }
  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'Are you sure, you want to delete this department?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }
  delete(event: any) {
    const config = {
      url: urls.departments.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.list = [];
        this.getDepartments();
      }
    });
  }

  noImplemented() {
    this.toastService.error('This functionality not yet implemented.');
  }
}
