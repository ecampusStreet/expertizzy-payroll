import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { ManagaeAttendanceComponent } from './managae-attendance/managae-attendance.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AttendanceComponent,
    ManagaeAttendanceComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    FlexLayoutModule
  ]
})
export class AttendanceModule { }
