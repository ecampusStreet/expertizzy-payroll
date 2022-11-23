import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'forgot-password',component:ForgotPasswordComponent },
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }]
  },
  {
    path: 'expertizzy',
    children: [{
      path: '',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }]
  },
  {
    path: 'attendance',
    children: [{
      path: '',
      loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule)
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
