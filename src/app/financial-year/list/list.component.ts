import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-financial-year',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class FinancialYearComponent implements OnInit {
  searchText = '';
  financialYear: any;
  displayedColumns = ['financialYear', 'currentYear','actions' ];
  page =1;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService,
    private matdialog: MatDialog,
    private utilsService : UtilsService
  ) {}

  ngOnInit(): void {
    this.getYear();
  }
  add() {
    this.router.navigate(['expertizzy/financialyear/add']);
    // this.matdialog
  }

  search() {
    this.page = 1;
    this.financialYear =[];
    this.getYear();
  }

  getYear() {
    const config = {
      url: urls.financialYear.list+'?search='+this.searchText,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp) {
        this.toast.success(resp.message);
        this.financialYear = resp.result.data;
        console.log(this.financialYear ,"this.financialYear ");
      }
    });
  }

  action(data: any, action: any) {
    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/financialyear/add'], {
          queryParams: { id: data._id },
        });
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
      case 'view':
        this.router.navigate(['expertizzy/financialyear/add'], {
          queryParams: { id: data._id, readOnly: true },
        });
        break;
    }
  }

  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'Are you sure, you want to delete this financial year?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }
  delete(event: any) {
    const config = {
      url: urls.financialYear.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.message);
        this.getYear();
      }
    });
  }
}
