import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = ['Lettertype', 'actions'];

  letterList = [];
  emp_id: any;
  DocumentList: any;
  selected_id: any;
  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    private apiService: ApiService,
    private toastService: ToastService,
    private utilsService: UtilsService

  ) {

    routerParams.queryParams.subscribe((params: any) => {
      if (params) {
        this.emp_id = params.id;
      }
    });
  }


  ngOnInit(): void {
    this.getDocument();
    if (this.emp_id) {
      this.displayedColumns.unshift("selectRadio");
    }
  }

  getDocument() {
    const config = {
      url: urls.document.list
    }
    this.apiService.get(config).subscribe((resp) => {
      if (resp) {
        this.toastService.success(resp.message);
        this.DocumentList = resp.data;
      }
    })
  }

  action(data: any, action: any) {

    switch (action) {
      case 'edit':
        this.router.navigate(['expertizzy/document/addletter'],{queryParams:{id :data._id}});
        break;
      case 'delete':
        this.deleteConfirmationpopup(data);
        break;
      // case 'view':
      //   this.router.navigate(['expertizzy/document/addletter'],{queryParams:{id :data._id, readOnly:true}});
      //   break;
    }
  }

  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'Are you sure, you want to delete this department?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }
  delete(event: any) {
    const config = {
      url: urls.departments.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toastService.success(resp.message);
        this.letterList = [];
        this.getDocument();
      }
    });
  }
  add() {
    this.router.navigate(['expertizzy/document/addletter']);
  }
  radioSelected(rowdata: any) {
    this.selected_id = rowdata._id;
  }
  getLetter() {
    let url =environment.apiBaseUrl + urls.document.getDocument + this.selected_id + '/emp/' + this.emp_id
    Object.assign(document.createElement('a'), {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: url,
  }).click();
  }
}
