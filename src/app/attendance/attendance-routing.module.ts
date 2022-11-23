import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
  },
  {
    path: 'list',
    component: AttendanceComponent,
  },
  {
    path: 'manage',
    component: ManageAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
