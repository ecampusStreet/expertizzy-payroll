import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AddDepartmentComponent } from './add/add.component';
import { DepartmentsComponent } from './list/departments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddDepartmentComponent, DepartmentsComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class DepartmentModule {}
