import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, UtilsService, urls } from 'src/app/core';

@Component({
  selector: 'app-branches',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BranchesComponent implements OnInit {
  searchText=''
branchList:any=[];
  displayedColumns: string[] = ['branchName', 'branchHead','branchHR','branchAddress','contactNumber','email','actions'];

  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.getBranch();
  }
  search(){
    
  }

  getBranch(){
    const  config = {
      url:urls.branch.list
    }
    this.apiService.get(config).subscribe((resp)=>{
      if(resp.success){
        this.branchList = resp.result.data;
        this.toastService.success(resp.message);

      }
    });
  }

  add(){
    this.router.navigate(['/expertizzy/branch/add']);
  }

  action(data: any, action: any) {
    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/branch/add'],{queryParams:{id :data._id}});
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
        case 'view':
          // this.router.navigate(['expertizzy/department/add'],{queryParams:{id :data._id, readOnly:true}});
          break;
        
    }
  }

  deleteConfirmationpopup(event:any){
    let data = {
      header:'',
      message:'are you sure, you want to delete this branch?',
    };
    this.utilsService.openDialog(data).then((resp)=>{
      if(resp){
        this.delete(event)
      }
    });
  }

  delete(event:any){
    const config = {
      url:urls.branch.delete + event._id,
    }
    this.apiService.delete(config).subscribe((resp) => {
      if(resp.success){
        this.toastService.success(resp.succes);
        this.branchList=[];
        this.getBranch();
      }
    });
  }
  
}
