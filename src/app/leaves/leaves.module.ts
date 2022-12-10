import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BalanceleaveComponent } from './balanceleave/balanceleave.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { LeavehistoryComponent } from './leavehistory/leave-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { LeavemanageComponent } from './leave-manage/leave-manage.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { MatTableModule } from '@angular/material/table';
import { AddLeavetypeComponent } from '../core/components/add-leavetype/add-leavetype.component';
// import { NoDataFoundComponent } from '../core/components/no-data-found/no-data-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [
    LeavemanageComponent,
    BalanceleaveComponent,
    LeaveApplyComponent,
    LeavehistoryComponent,
    LeaveTypesComponent,
    AddLeavetypeComponent,
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    CoreModule,
    FlexLayoutModule,
  ],
})
export class LeavesModule {}
