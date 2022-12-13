import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftsRoutingModule } from './shifts-routing.module';
import { ListsComponent } from './lists/lists.component';
import { AddComponent } from './add/add.component';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule, } from '@angular/material/datepicker';
@NgModule({
  declarations: [
    ListsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ShiftsRoutingModule,
    CoreModule,
    SharedModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
  ]
})
export class ShiftsModule { }
