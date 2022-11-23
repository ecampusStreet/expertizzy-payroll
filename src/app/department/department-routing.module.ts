import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add/add.component';
import { DepartmentsComponent } from './list/departments.component';

const routes: Routes = [
  {path:'',component:DepartmentsComponent},
  {path:'add',component:AddDepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
