import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
        {
          path: 'leave',
          loadChildren: () =>
            import('../leaves/leaves.module').then(
              (m) => m.LeavesModule
            ),
        },
        {
          path: 'payroll',
          loadChildren: () =>
            import('../payroll/payroll.module').then(
              (m) => m.PayrollModule
            ),
        },

        {
          path: 'holiday',
          loadChildren: () =>
            import('../holidays/holidays.module').then(
              (m) => m.HolidaysModule
            ),
        },
        {
          path: 'reshuffle',
          loadChildren: () =>
            import('../reshuffle/reshuffle.module').then(
              (m) => m.ReshuffleModule),
            },
        {
          path: 'shifts',
          loadChildren: () =>
            import('../shifts/shifts.module').then(
              (m) => m.ShiftsModule
            ),
        },
        {
          path: 'roles',
          loadChildren: () =>
            import('../roles/roles.module').then(
              (m) => m.RolesModule
            ),},
            {
          path: 'document',
          loadChildren: () =>
            import('../documents/documents.module').then(
              (m) => m.DocumentsModule
            ),
        },
        {
          path: 'event',
          loadChildren: () =>
            import('../event/event.module').then(
              (m) => m.EventModule
            ),
        },
        {
          path: 'notice',
          loadChildren: () =>
            import('../notice/notice.module').then(
              (m) => m.NoticeModule
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
