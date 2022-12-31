import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { urls } from 'src/app/core/constants/urlConstants';
import { UtilsService } from 'src/app/core/services';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss'],
})
export class DesignationComponent implements OnInit {
  count = 0;
  limit = 5;
  page = 1;
  permissions:any;
  designationList = [];
  searchText = "";
  displayedColumns = ['designationName','status'];


  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService,
    private utilsService: UtilsService,
    private routerParams: ActivatedRoute,

  ) {
  }
 
  async ngOnInit(){
    this.getDesignation();
    this.permissions =  await this.utilsService.getPermission();
    this.permissionCheck();
    if(this.permissions?.manage || this.permissions?.delete || this.permissions?.update ){
      this.displayedColumns.push('actions');
    }
  }

  getDesignation() {
    const config = {
      url: urls.designation.list +'?limit=' + this.limit + '&page=' + this.page + '&designation=' + this.searchText ,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.designationList = this.designationList.concat(resp.result.data);
        this.toast.success(resp.message);
      } else {
        this.toast.error(resp.message);
      }
    });
  }

    search() {
      this.count = 0;
      this.page = 1;
      this.designationList = [];
      this.getDesignation();
    }
  

  action(data: any, action: any) {
    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/designation/add'], {
          queryParams: { id: data._id },
        });
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
      case 'view':
        this.router.navigate(['expertizzy/designation/add'], {
          queryParams: { id: data._id, readOnly: true },
        });
        break;
    }
  }

  add() {
    this.router.navigate(['/expertizzy/designation/add']);
  }
  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'Are you sure, you want to delete this designation?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }
  delete(event: any) {
    const config = {
      url: urls.designation.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.message);
        this.designationList = [];
        this.getDesignation();
      }
    });
  }

  permissionCheck(){
    if(this.permissions['humanResource']){
      this.permissions =this.permissions['humanResource'];
      console.log(this.permissions,'bdhfsdhf')
    }
}
}
