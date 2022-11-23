import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfinancialYearComponent } from './add/add.component';
import { FinancialYearComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',component:FinancialYearComponent
  },
  {
    path:'add',component:AddfinancialYearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialYearRoutingModule { }
