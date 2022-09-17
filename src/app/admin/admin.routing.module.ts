import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatalistComponent } from './datalist/datalist.component';
import { EmployeesComponent } from './employees/employees.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',  component: AdminComponent,
children:[
    { path: '',  component: DashboardComponent },
    { path: 'dashboard',  component: DashboardComponent },
    {path:'employees', component:EmployeesComponent},
    {path:'datalist', component:DatalistComponent}
]},


];


@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }