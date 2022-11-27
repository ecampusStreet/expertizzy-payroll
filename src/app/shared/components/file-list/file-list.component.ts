import { Component, Input, OnInit } from '@angular/core';
import { ApiService, urls, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
@Input() data :any;
  constructor(
    private apiService :ApiService,
    private utils :UtilsService
  ) { }

  ngOnInit(): void {
  }

  delete(id:any, index:any){
    const config ={
      url: urls.files.deleteFileById + id
    }
    this.apiService.delete(config).subscribe(resp =>{
      this.data.splice(index,1)
    })
  }
  deleteConfirm(item:any, index:any){
    let payload = {
      header:"",
      message:"Are you sure, you want to delete "+ item.name +" ?"
    }
    this.utils.openDialog(payload).then(resp =>{
        if(resp){
          this.delete(item._id, index);
        }
      })
  }
}
