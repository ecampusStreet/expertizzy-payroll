import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { LoginComponent } from './auth/login/login.component';
import { PrivateGuard } from './core';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
  // {path:'',   redirectTo: 'login',
  // pathMatch: 'full',},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'employees',component:EmployeesComponent },
  // {
  //   path: 'login',
  //   component:LoginComponent,
  //   canActivate:[PrivateGuard]
  // }

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent },
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }]
  },
  {
    path: 'admin',
    children: [{
      path: '',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }]
  },
  { path: 'user', loadChildren: () => 
  import('./user/user.module').then(m => m.UserModule) },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
