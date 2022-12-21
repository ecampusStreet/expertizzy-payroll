import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReshuffleRoutingModule } from './reshuffle-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ReshuffleRoutingModule,
    SharedModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ]
})
export class ReshuffleModule { }
