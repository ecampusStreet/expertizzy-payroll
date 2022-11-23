import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, ToastService, urls, UtilsService } from 'src/app/core';
import { FilterFormComponent } from '../../../core/components/filter-form/filter-form.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title = 'Employee master data';
  count = 0;
  limit = 25;
  page = 1;

  employeeList = [];
  searchText: any = '';

  filters = {
    department: '',
    designation: '',
    doj: '',
    gender: '',
    branch: '',
    financialyear: '',
    experience: '',
  };

  tableheader = [
    { title: 'EmplID' },
    { title: 'Name' },
    { title: 'Designation' },
    { title: 'Department' },
    { title: 'MailID' },
    { title: 'MobileNo' },
  ];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService,
    private utilsService: UtilsService,
    private routerParams: ActivatedRoute,
    private matdialog: MatDialog
  ) {
    routerParams.queryParams.subscribe((params) => {
      console.log(params, 'params employee');
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(showToast = true) {
    const config = {
      url:
        urls.employee.list +
        '?limit=' +
        this.limit +
        '&page=' +
        this.page +
        '&search=' +
        this.searchText +
        '&department=' +
        this.filters.department +
        '&designation=' +
        this.filters.designation +
        '&doj=' +
        this.filters.doj +
        '&gender=' +
        this.filters.gender +
        '&branch=' +
        this.filters.branch +
        '&financialyear=' +
        this.filters.financialyear +
        '&experience=' +
        this.filters.experience,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp.success) {
        this.employeeList = this.employeeList.concat(resp.result.data);
        this.count = resp.result.count;
        showToast ? this.toast.success(resp.message) : '';
      } else {
        this.toast.error(resp.message);
      }
    });
  }

  // Empl ID	Name	designation	Grade	department	Team	department Head	Team Leader	Emp mail id	emp Mobile no	Gender	Date of Joining	Date of Birth	Blood Group	Father Name	Marital Status	Bank Name 	Account no	IFSC code	UAN no	PAN No	AADHAARNo	qualification	Work Experience 	Leave entitalment

  action(event: any) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['expertizzy/employee/add'], {
          queryParams: { id: event.data._id },
        });
        break;
      case 'delete':
        this.deleteConfirmationpopup(event.data);
        break;
      case 'view':
        this.router.navigate(['expertizzy/employee/view', event.data._id]);
        break;
    }
  }

  deleteConfirmationpopup(event: any) {
    let data = {
      header: '',
      message: 'Are you sure, you want to delete this employee?',
    };
    this.utilsService.openDialog(data).then((resp) => {
      if (resp) {
        this.delete(event);
      }
    });
  }
  add() {
    this.router.navigate(['expertizzy/employee/add']);
  }
  loadMore() {
    this.count = 0;
    this.page = this.page + 1;
    this.getEmployees();
  }
  search() {
    this.count = 0;
    this.page = 1;
    this.employeeList = [];
    this.getEmployees();
  }
  delete(event: any) {
    const config = {
      url: urls.employee.delete + event._id,
    };
    this.apiService.delete(config).subscribe((resp) => {
      if (resp.success) {
        this.toast.success(resp.message);
        this.employeeList = [];
        this.getEmployees(false);
      }
    });
  }
  openPopup() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matdialog.open(FilterFormComponent, {
      width: '60%',
      data: this.filters,
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        this.filters.department = result.department ? result.department : '';
        this.filters.designation = result.designation ? result.designation : '';
        this.filters.doj = result.doj ? result.doj : '';
        this.filters.gender = result.gender ? result.gender : '';
        this.filters.branch = result.branch ? result.branch : '';
        this.filters.financialyear = result.financialyear ? result.financialyear: ''  
        this.filters.experience = result.experience ? result.experience : '';
        this.filters = result;
        this.getEmployees();
        this.employeeList = [];
      }
    });
  }
}
