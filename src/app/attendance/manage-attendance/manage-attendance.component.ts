import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterFormComponent } from 'src/app/core/components/filter-form/filter-form.component';

@Component({
  selector: 'app-manage-attendance',
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.scss'],
})
export class ManageAttendanceComponent implements OnInit {
  today = new Date();
  searchText = '';
  isPresent: boolean = false;
  displayedColumns: string[] = [
    'profile_photo',
    'name',
    'mobile',
    'designation',
    'department',
    'actions',
  ];

  employees = [
    {
      employee: {
        firstName: 'vishwanath',
        lastName: 'badiger',
        fatherName: 'suresh',
        gender: 'male',
        mobile: 8147748824,
        email: 'vishwanath@gmail.com',
        departmentName: 'Developer',
        designation: 'angularDeveloper ',
      },
      attendance: {
        timeIn: null,
        timeOut: null,
        location: null,
        isPresent: false,
      },
    },
    {
      employee: {
        firstName: 'vishwanath',
        lastName: 'badiger',
        fatherName: 'suresh',
        gender: 'male',
        mobile: 7816892014,
        email: 'vishwanath@gmail.com',
        departmentName: 'Developer',
        designation: 'angularDeveloper ',
      },
      attendance: {
        timeIn: null,
        timeOut: null,
        location: null,
        isPresent: true,
      },
    },
  ];
  constructor(private matdialog: MatDialog) {}

  ngOnInit(): void {}

  add() {}
  search() {}

  updateAttendance(employee: any) {
    console.log(employee, 'employee');
    const config = {
      url: '',
      payload: employee,
    };
  }

  openPopup() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matdialog.open(FilterFormComponent, {
      width: '60%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
