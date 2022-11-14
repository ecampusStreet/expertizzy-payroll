import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialYearRoutingModule } from './financial-year-routing.module';
import { AddfinancialYearComponent } from './add/add.component';
import { FinancialYearComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddfinancialYearComponent, FinancialYearComponent],
  imports: [CommonModule,
     FinancialYearRoutingModule,
     FormsModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,],
})
export class FinancialYearModule {}
