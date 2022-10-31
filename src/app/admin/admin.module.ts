import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AddComponent } from './employee/add/add.component';
import { MatIconModule } from '@angular/material/icon';
// import { DatalistComponent } from './datalist/datalist.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { DashboardCardComponent } from '../core/components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { ApiInterceptor } from '../core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListComponent } from './employee/list/list.component';
import { ViewComponent } from './employee/view/view.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DepartmentsComponent } from './departments/list/departments.component';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { OverviewComponent } from './employee/overview/overview.component';
import { AttendanceComponent } from './employee/attendance/attendance.component';
import { AttendanceModule } from '../attendance/attendance.module';
import { DesignationComponent } from './Designation/list/designation.component';
import { DesignationaddComponent } from './Designation/add/designationadd.component';
import { AddDepartmentComponent } from './departments/add/add.component';
import { DatalistComponent } from './datalist/datalist.component';
import { DashboardCardComponent } from '../core/components';

@NgModule({
  declarations: [AddComponent,
    AdminComponent, 
    DatalistComponent,
    ListComponent,
    DashboardComponent,
    DashboardCardComponent,
    ViewComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    OverviewComponent,
    AttendanceComponent,
    DesignationaddComponent,
    DesignationComponent
  ],
  
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CoreModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    SharedModule,
    MatSidenavModule,
    MatCheckboxModule,
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
    MatGridListModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSlideToggleModule,
    LayoutModule,
    AttendanceModule,
    MatDatepickerModule,
  ],
  exports: [AdminComponent, AddDepartmentComponent],
  providers: [
    MatNativeDateModule,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
})
export class AdminModule {}
