import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService,
    private utilsService: UtilsService
  ) {}

  displayedColumns = ['designationName', 'actions'];

  designationList = [];

  ngOnInit(): void {
    this.getDesignation();
  }

  getDesignation() {
    const config = {
      url: urls.designation.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.designationList = this.designationList.concat(resp.result.data);
        console.log(this.designationList);
        this.toast.success(resp.message);
      } else {
        this.toast.error(resp.message);
      }
    });
  }

  action(data: any, action: any) {
    switch (action) {
      case 'edit':
        // this.router.navigate(['admin/designation/add'], {
        //   queryParams: { id: data._id },
        // });
        this.toast.error("Not yet implemented")
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
      case 'view':
        this.router.navigate(['admin/designation/add'], {
          queryParams: { id: data._id, readOnly: true },
        });
        break;
    }
  }

  add() {
    // this.router.navigate(['admin/designation/add']);
    this.toast.error('Not yet implemented ');
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
}
