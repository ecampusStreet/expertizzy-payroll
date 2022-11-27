import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationaddComponent } from './add/designationadd.component';
import { DesignationComponent } from './list/designation.component';

const routes: Routes = [
  { path: '', component: DesignationComponent },
  { path: 'designation/list', component: DesignationComponent },
  { path: 'add', component: DesignationaddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignationRoutingModule {}
