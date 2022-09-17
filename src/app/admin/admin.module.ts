import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin.component';
// import { EmployeesComponent } from './employees/employees.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { MatIconModule } from '@angular/material/icon';
import { DatalistComponent } from './datalist/datalist.component';
import { DashboardCardComponent } from '../core/components';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [EmployeesComponent, AdminComponent, DatalistComponent,DashboardComponent,DashboardCardComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    AdminRoutingModule,
    MatSidenavModule,
    CoreModule,
    LayoutModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    MatGridListModule
  ],
  exports:[AdminComponent]
})
export class AdminModule {}
