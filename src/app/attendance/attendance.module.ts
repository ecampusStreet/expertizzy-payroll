import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';
import { ListComponent } from './list/list.component';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [AttendanceComponent, ManageAttendanceComponent, ListComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    MatDatepickerModule,
    MatTableModule,
    MatSlideToggleModule,
    MatBadgeModule
  ],
})
export class AttendanceModule {}
