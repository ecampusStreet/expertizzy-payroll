import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { PrivateGuard } from './core';
const routes: Routes = [
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
