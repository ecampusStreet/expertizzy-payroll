import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/core';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss']
})
export class DataModalComponent implements OnInit {
page =1;
limit=25;
dataList :any=[];
selection:any;
searchText :any='';
count =0;
  constructor(
    public dialogRef: MatDialogRef<DataModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService : ApiService
  ) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    const config={
      url : this.data.url + '?page='+this.page+'&limit='+this.limit+'&search='+this.searchText
    }
    this.apiService.get(config).subscribe(dataList =>{
      if(dataList.success){
        this.dataList = this.dataList.concat(dataList.result.data);
        this.count = dataList.result.count;
      }
    })
  }
  valueChange(event:any){
this.selection = event.value
  }
  action(){
    this.dialogRef.close(this.selection);
  }
  search(){
    this.count = 0;
    this.page = 1;
    this.dataList = [];
    this.getData();
  }
  loadMore(){
    this.count =0;
    this.page =this.page + 1;
    this.getData();
  }

}
