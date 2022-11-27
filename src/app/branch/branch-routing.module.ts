import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbranchComponent } from './add/add.component';
import { BranchesComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: BranchesComponent,
  },
  {
    path: 'list',
    component: BranchesComponent,
  },
  {
    path: 'add',
    component: AddbranchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
