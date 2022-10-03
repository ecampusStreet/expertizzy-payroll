import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from '../shared/components/leave/leave.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { ColleguesComponent } from './components/collegues/collegues.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      // { path: '', component: HomeComponent },
      { path: '', component: UserDashboardComponent },
      {path:'dashboard',component:UserDashboardComponent},
      {path:'user',component:UserComponent},
      {path:'attendence', component:AttendenceComponent},
      {path:'all-feeds',component:FeedsComponent},
      {path:'collegues', component:ColleguesComponent},
      { path: 'home', component: HomeComponent },
      {path:'leave',component:LeaveComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
