import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  searchText="";
  list:any=[];
  displayedColumns: string[] = ['name', 'actions'];
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
this.getRoles();
  }
  getRoles() {
    const config = {
      url:
        urls.roles.list + '?limit=' + this.limit + '&page=' + this.page,
    };
    this.apiService.get(config).subscribe((data) => {
      if(data){
        this.list = this.list.concat(data.data);
      this.count = data.count;
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
        this.router.navigate(['expertizzy/roles/add'],{queryParams:{id :data._id}});
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
      case 'view':
        this.router.navigate(['expertizzy/roles/add'],{queryParams:{id :data._id, readOnly:true}});
        break;
        
    }
  }
  add(){
    this.router.navigate(['expertizzy/roles/add']);
  }
  loadMore() {
    this.count = 0;
    this.page = this.page + 1;
    this.getRoles();
  }
  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'Are you sure, you want to delete this role?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }
  delete(event: any) {
    const config = {
      url: urls.roles.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.list = [];
        this.getRoles();
      }
    });
  }
}
