import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService, ToastService, UtilsService, urls } from 'src/app/core';
import { environment } from 'src/environments/environment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  date:any = moment(new Date());
  financialYear: any;
  months : any = [];
  currentYear :any;
  currentMonth =  new Date().getMonth()+1;

  constructor(private router: Router,
    private apiService: ApiService,
    private toast: ToastService,
    private utilsService : UtilsService) { 
    
  }
  ngOnInit(): void {
    this.getYear();
    this.months = moment.months();
  }



 
  getYear() {
    const config = {
      url: urls.financialYear.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.financialYear = resp.result.data;
        let year = this.financialYear.filter( (year:any) => year.status);
        this.currentYear =  year[0].currentYear
      }
    });
  }
  processPayment(){
    let month = this.currentMonth <10 ? '0'+this.currentMonth :'';
    let url = environment.apiBaseUrl+ urls.payroll.salaryList+this.currentYear+'-'+month;
    this.utilsService.downloadPDF(url);
  }
}
