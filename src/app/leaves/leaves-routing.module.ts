import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceleaveComponent } from './balanceleave/balanceleave.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { LeavehistoryComponent } from './leavehistory/leave-history.component';
import { LeavemanageComponent } from './leave-manage/leave-manage.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';

const routes: Routes = [
  { path: '', component: BalanceleaveComponent },
  { path: 'balance', component: BalanceleaveComponent },
  { path: 'apply', component: LeaveApplyComponent },
  { path: 'history', component: LeavehistoryComponent },
  { path: 'manage', component: LeavemanageComponent },
  { path: 'leavetype', component: LeaveTypesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeavesRoutingModule {}
