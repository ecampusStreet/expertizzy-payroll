import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      { path: 'home', component: HomeComponent },
      {path:'user',component:UserComponent},
      {path:'userdashboard',component:UserDashboardComponent},

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
