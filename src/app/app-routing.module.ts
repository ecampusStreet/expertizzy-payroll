import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { LoginComponent } from './auth/login/login.component';
import { PrivateGuard } from './core';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
