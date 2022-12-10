import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from '../shared/components/leave/leave.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { ColleguesComponent } from './components/collegues/collegues.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EventsComponent } from './components/events/events.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { LeavemanagementComponent } from './components/leavemanagement/leavemanagement.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
import { LeaveApplyComponent } from './leavemanagement/leave-apply/leave-apply.component';
import { LeavehistoryComponent } from './leavemanagement/leavehistory/leavehistory.component';
import { BalanceleaveComponent } from './leavemanagement/balanceleave/balanceleave.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: UserDashboardComponent },
      {path:'dashboard',component:UserDashboardComponent},
      {path:'user',component:UserComponent},
      {path:'attendence', component:AttendenceComponent},
      {path:'all-feeds',component:FeedsComponent},
      {path:'collegues', component:ColleguesComponent},
      { path: 'home', component: HomeComponent },
      {path:'leaves',component:LeavemanagementComponent},
      {path:'events',component:EventsComponent},
      {path:'departments',component:DepartmentsComponent},
      {path:'apply',component:LeaveApplyComponent},
      {path:'history',component:LeavehistoryComponent},
      {path:'balance',component:BalanceleaveComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
