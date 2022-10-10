import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpViewComponent } from '../shared/components/emp-view/emp-view.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatalistComponent } from './datalist/datalist.component';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { AddComponent } from './employee/add/add.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee/add', component: AddComponent },
      { path: 'employee/list', component: EmployeesListComponent },
        {path:'employee/:id',component:EmpViewComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
