import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls } from 'src/app/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-financial-year',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class FinancialYearComponent implements OnInit {
  searchText = '';
  financialYear: any;
  displayedColumns = ['financialYear', 'currentYear', 'action'];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService,
    private matdialog: MatDialog

  ) {}

  ngOnInit(): void {
    this.getYear();
  }
  add() {
    // this.router.navigate(['expertizzy/financialyear/add']);
    this.matdialog


  }

  search() {}

  action() {}
  getYear() {
    const config = {
      url: urls.financialYear.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      console.log(resp, 'years');
      if (resp) {
        this.toast.success(resp.message);
        this.financialYear = resp.result.data;
      }
    });
  }
}
