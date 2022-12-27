import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, UtilsService, urls } from 'src/app/core';

@Component({
  selector: 'app-branches',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class BranchesComponent implements OnInit {
  searchText = '';
  branchList: any = [];
  count = 0;
  limit = 25;
  page = 1;
  displayedColumns: string[] = [
    'branchName',
    'branchHead',
    'branchHR',
    'branchAddress',
    'contactNumber',
    'email',
    
  ];
  permissions: any;
  

  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  async ngOnInit(){
    this.getBranch();
    this.permissions =  await this.utilsService.getPermission();
    this.permissionCheck();

    if(this.permissions?.manage || this.permissions?.delete || this.permissions?.update ){
      this.displayedColumns.push('actions');
    }
  }
  search() {
    this.count = 0;
    this.page = 1;
    this.branchList = [];
    this.getBranch();
  }
  getBranch() {
    const config = {
      url: urls.branch.list + '?limit=' +
      this.limit +
      '&page=' +
      this.page +
      '&search=' +
      this.searchText,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.branchList = resp.result.data;
        this.toastService.success(resp.message);
      }
    });
  }

  add() {
    this.router.navigate(['/expertizzy/branch/add']);
  }

  loadMore() {
    this.count = 0;
    this.page = this.page + 1;
    this.getBranch();
  }

  action(data: any, action: any) {
    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/branch/add'], {
          queryParams: { id: data._id },
        });
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break; 
      case 'view':
        this.router.navigate(['expertizzy/branch/add'],{queryParams:{id :data._id, readOnly:true}});
        break;
    }
  }

  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'are you sure, you want to delete this branch?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }

  delete(event: any) {
    const config = {
      url: urls.branch.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.succes);
        this.branchList = [];
        this.getBranch();
      }
    });
  }

  permissionCheck(){
    if(this.permissions['administrator']){
      this.permissions =this.permissions['administrator'];
      console.log(this.permissions,'bdhfsdhf')
    }
}
}
