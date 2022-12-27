import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-listgrade',
  templateUrl: './listgrade.component.html',
  styleUrls: ['./listgrade.component.scss']
})
export class ListgradeComponent implements OnInit {
searchText='';
gradeList = [];
permissions:any;
count = 0;
  limit = 5;
  page = 1;
displayedColumns =['grade','from', 'to', 'actions'];
  constructor(
    private router: Router,
    private apiService : ApiService,
    private tostService : ToastService,
    private utilsService: UtilsService

  ) { }


  async ngOnInit(){
    this.getBreakups();
    this.permissions =  await this.utilsService.getPermission();
    this.permissionCheck();
    if(this.permissions?.manage || this.permissions?.delete || this.permissions?.update ){
      this.displayedColumns.push('actions');
    }
  }

  getBreakups(){
    const config = { 
      url:urls.payroll.list +'?limit=' + this.limit + '&page=' + this.page + '&gradeName=' + this.searchText 
    }
    this.apiService.get(config).subscribe((resp)=>{
      if(resp.success){
        this.tostService.success(resp.message);
        this.gradeList = resp.result.data;
      }
    })
  }

add(){
  this.router.navigate(['/expertizzy/payroll/add']);
}
search() {
  this.count = 0;
  this.page = 1;
  this.gradeList = [];
  this.getBreakups();
}
action(data:any, action:any){
  switch (action) {
    case 'edit':
      this.router.navigate(['expertizzy/payroll/add'], {
        queryParams: { id: data._id },
      });
      break;
    case 'delete':
      this.deleteConfirmationpopup(data);
      break;
    // case 'view':
    //   this.router.navigate(['expertizzy/designation/add'], {
    //     queryParams: { id: data._id, readOnly: true },
    //   });
    //   break;
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



delete(event: any) {
  const config = {
    url: urls.payroll.delete + event._id,
  };
  this.apiService.delete(config).subscribe((resp) => {
    if (resp.success) {
      this.tostService.success(resp.message);
      this.gradeList = [];
      this.getBreakups();
    }
  });
}

permissionCheck(){
  if(this.permissions['documents']){
    this.permissions =this.permissions['documents'];
    console.log( this.permissions,'document')
  }
}

}
