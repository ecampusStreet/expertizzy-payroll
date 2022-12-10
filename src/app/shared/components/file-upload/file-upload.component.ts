import { Component, Input, OnInit } from '@angular/core';
import { ApiService, urls } from 'src/app/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
@Input() data:any;
  constructor(
    private apiService : ApiService
  ) { }

      ngOnInit(): void {
      }
  onFileChange(e: any) {
    let formData = new FormData();
    if (e.target.files && e.target.files[0]) {
      Array.from(e.target.files).forEach((file: any) => {
        formData.append('files',file)
      });
      const config ={
        url : urls.files.upload,
        payload:formData
      }
      this.apiService.post(config).subscribe(resp =>{
        this.data.value.files = this.data.value.files ? this.data.value.files : [];
        this.data.value.files = this.data.value.files.concat(resp.result);
      })
    }
  }
}
