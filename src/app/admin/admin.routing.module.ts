import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DatalistComponent } from './datalist/datalist.component';
import { AddComponent } from './employee/add/add.component';
import { ListComponent } from './employee/list/list.component';
import { ViewComponent } from './employee/view/view.component';
import { OverviewComponent } from './employee/overview/overview.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee/add', component: AddComponent },
      { path: 'employee/list', component: ListComponent },
      { path: 'employee/view/:id', component: ViewComponent },
      { path: 'employee/overview', component: OverviewComponent },
      // { path: 'department/list', component: DepartmentsComponent },
      // { path: 'department/add', component: AddDepartmentComponent },
      // // { path: 'designation/list', component: DesignationComponent },
      // // { path: 'designation/add', component: DesignationaddComponent },
      // { path: 'branch/list', component: BranchesComponent },
      // { path: 'branch/add', component: AddbranchComponent },

      // { path: 'financialyear/add', component: AddfinancialYearComponent },
      // { path: 'financialyear/list', component: FinancialYearComponent },

      {
        path: 'attendance',
        loadChildren: () =>
          import('../attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'designation',
        loadChildren: () =>
          import('../designation/designation.module').then(
            (m) => m.DesignationModule
          ),
      },

      {
        path: 'branch',
        loadChildren: () =>
          import('../branch/branch.module').then((m) => m.BranchModule),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('../department/department.module').then(
            (m) => m.DepartmentModule
          ),
      },
      {
        path: 'financialyear',
        loadChildren: () =>
          import('../financial-year/financial-year.module').then(
            (m) => m.FinancialYearModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
