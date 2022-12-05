import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { AddgradeComponent } from './salary/addgrade/addgrade.component';
import { ListgradeComponent } from './salary/listgrade/listgrade.component';
import { CoreModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddgradeComponent,
    ListgradeComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})
export class PayrollModule { }
