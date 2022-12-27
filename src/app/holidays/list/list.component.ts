import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, holiDays, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list:any = holiDays;
  selected: any ;
  permissions: any;

  constructor(
    private router: Router,
    private apiService : ApiService,
    private toastService : ToastService,
    private utilsService: UtilsService

  ) { }



  async ngOnInit(){
    this.getHolidays();
    this.permissions =  await this.utilsService.getPermission();
    this.permissionCheck();
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
      if(data.success && data.result && data.result.data){
        this.list.forEach((element:any) => {
            element.data=[];
        });
        data.result.data.forEach((element:any) => {
          this.list[new Date(element.toDate).getMonth()].data.push(element);
          this.selected =  this.list[new Date().getMonth()];
        });
      }
      else{
          this.list.forEach((element:any) => {
            element.data=[];
        });
        this.selected = '';
        this.toastService.error(data.message);
      }
    });
  }

  View(data:any){
    this.selected = data;
    console.log(this.selected,'selected')
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
    message: 'Are you sure, you want to delete this holiday?',
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
        this.selected = '';
        this.getHolidays();
      }
    });
}

permissionCheck(){
  if(this.permissions['calendar']){
    this.permissions =this.permissions['calendar'];
    console.log(this.permissions,'bdhfsdhf')
  }
}
}