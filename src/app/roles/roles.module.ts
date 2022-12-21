import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    PermissionsComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,MatTableModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class RolesModule { }
