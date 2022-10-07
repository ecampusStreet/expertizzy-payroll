import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';



export const AuthRoutes: Routes = [
  { path: '',  redirectTo:'login', pathMatch:'full'},
  { path: 'login',  component: LoginComponent },
     {
  path: '',
  component: DashboardComponent,
  children: [{
    path: '',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  }]
}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthRoutingModule { }
