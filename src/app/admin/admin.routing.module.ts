import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DatalistComponent } from './datalist/datalist.component';
import { DepartmentsComponent } from './departments/list/departments.component';
import { DesignationComponent } from './Designation/list/designation.component';
import { AddComponent } from './employee/add/add.component';
import { ListComponent } from './employee/list/list.component';
import { ViewComponent } from './employee/view/view.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee/add', component: AddComponent },
      { path: 'employee/list', component: ListComponent },
      { path: 'employee/view/:id',component:ViewComponent},
      { path: 'department/list',component:DepartmentsComponent},
      { path: 'department/add',component:DepartmentsComponent},
      { path: 'designation/list',component:DesignationComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
