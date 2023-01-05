import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { AddgradeComponent } from './salary/addgrade/addgrade.component';
import { ListgradeComponent } from './salary/listgrade/listgrade.component';

const routes: Routes = [
  {path:'',component:ListgradeComponent},
  {path:'list',component:ListgradeComponent},
  {path:'add',component:AddgradeComponent},
  {path:'payments',component:PaymentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
