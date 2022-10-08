import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '../layout/layout.module';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { ColleguesComponent } from './components/collegues/collegues.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EventsComponent } from './components/events/events.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LeavemanagementComponent } from './components/leavemanagement/leavemanagement.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LeaveApplyComponent } from './leavemanagement/leave-apply/leave-apply.component';
import { LeavehistoryComponent } from './leavemanagement/leavehistory/leavehistory.component';
import { BalanceleaveComponent } from './leavemanagement/balanceleave/balanceleave.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  schemas: [NO_ERRORS_SCHEMA],

  declarations: [
    UserComponent,
    HomeComponent,
    UserDashboardComponent,
    AttendenceComponent,
    FeedsComponent,
    ColleguesComponent,
    DepartmentsComponent,
    EventsComponent,
    EmployeeComponent,
    LeavemanagementComponent,
    LeaveApplyComponent,
    LeavehistoryComponent,
    BalanceleaveComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    LayoutModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
