import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignationRoutingModule } from './designation.routing.module';
import { DesignationaddComponent } from './add/designationadd.component';
import { DesignationComponent } from './list/designation.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [DesignationaddComponent, DesignationComponent],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class DesignationModule {}
