import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, EmployeesComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    LayoutModule,
    MatSidenavModule,
  ],
})
export class AdminModule {
  constructor() {}
}
