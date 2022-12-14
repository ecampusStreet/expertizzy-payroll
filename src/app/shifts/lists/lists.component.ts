import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import * as moment from 'moment';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  list :any;
  displayedColumns = ['name', 'fromDate','toDate','startTime','endTime', 'action'];
  count =0;
  page = 1;
  limit =25;
  momentInstance = moment;

  constructor(
    private apiService :ApiService,
    private toast:ToastService,
    private utilsService:UtilsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getList();
  }
  loadMore() {
    this.count = 0;
    this.page = this.page + 1;
    this.getList();
  }
  add(data?: any): void {
    this.router.navigate(['expertizzy/shifts/add'],{queryParams: { id: data?._id }})
  }
  getList(){
    const config={
      url:urls.shifts.list+
      '?limit=' +
      this.limit +
      '&page=' +
      this.page
    }
    this.apiService.get(config).subscribe(resp =>{
      if(resp.success){
       this.list =resp.result.data;
       this.count = resp.result.count;
      }
    })
  }
  action(data: any, action: any) {
    switch (action) {
      case 'edit':
         this.add(data);
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
    }
  }

   
  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'are you sure, you want to delete this shift?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }

  delete(event: any) {
    const config = {
      url: urls.shifts.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.succes);
        this.list = [];
        this.getList();
      }
    });
  }
}
