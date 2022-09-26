import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpViewComponent } from '../shared/components/emp-view/emp-view.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatalistComponent } from './datalist/datalist.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesComponent } from './employees/employees.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employee-list', component: EmployeesListComponent },
        // { path: 'datalist', component: DatalistComponent },
        {path:'employee-view',component:EmpViewComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
