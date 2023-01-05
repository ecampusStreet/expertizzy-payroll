import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ToastService, UtilsService } from 'src/app/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService : ApiService,
    private toastService : ToastService,
    private utilsService: UtilsService
    ) { }

  ngOnInit(): void {
  }
  
  add(){
    this.router.navigate(['expertizzy/notice/add']);
  }
}
