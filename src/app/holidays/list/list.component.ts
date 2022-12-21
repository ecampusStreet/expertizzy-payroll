import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  searchText='';
  holidaysList=[];
  displayedColumns=['onThisDay','description','fromDate','toDate','actions'];
  constructor(
    private router: Router,
    private apiService : ApiService,
    private toastService : ToastService,
    private utilsService: UtilsService

  ) { }

  ngOnInit(): void {
    this.getHolidays();
  }

  add(){
    this.router.navigate(['expertizzy/holiday/addHoliday']);
  }
  search(){

  }
  getHolidays(){
    const config = {
      url:urls.holiday.list,
    }
    this.apiService.get(config).subscribe((data)=>{
      if(data){
        this.holidaysList = data.result.data;
        this.toastService.success(data.message);
      }
      else{
        this.toastService.error(data.message);
      }
    });
  }

  action(data:any, action:any){
    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/holiday/addHoliday'], {
          queryParams: { id: data._id },
        });
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
      
    }
  }

  deleteConfirmationpopup(event:any){
  let data = {
    header: '',
    message: 'Are you sure, you want to delete this payGrade?',
  };
  this.utilsService.openDialog(data).then((resp) => {
    if (resp) {
      this.delete(event);
    }
  });
}

delete(event:any){
const config ={
  url:urls.holiday.delete + event._id,
}
this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.holidaysList = [];
        this.getHolidays();
      }
    });
}

 
}