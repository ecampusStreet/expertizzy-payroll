import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',  component: AdminComponent,
children:[
    { path: '',  component: DashboardComponent },
    { path: 'dashboard',  component: DashboardComponent }
]},


];


@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }