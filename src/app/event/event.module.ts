import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventRoutingModule } from './event-routing.module';
import { ListComponent } from './list/list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule } from "../shared/shared.module";
import { AddComponent } from './add/add.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ListComponent,
        AddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        EventRoutingModule,
        FullCalendarModule,
        SharedModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    ]
})
export class EventModule { }
