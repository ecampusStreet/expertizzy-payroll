import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin.component';
// import { EmployeesComponent } from './employees/employees.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout'
@NgModule({
  declarations: [
    // EmployeesComponent
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    CoreModule,
    LayoutModule,
    FlexLayoutModule
  ]
})
export class AdminModule { 
}
