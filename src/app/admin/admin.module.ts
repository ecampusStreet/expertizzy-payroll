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
import { MatCheckboxModule } from '@angular/material/checkbox';
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
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverviewComponent } from './employee/overview/overview.component';
import { AttendanceModule } from '../attendance/attendance.module';
import { DashboardCardComponent } from '../core/components';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterFormComponent } from '../core/components/filter-form/filter-form.component';
import { SettingsModule } from '../settings/settings.module';
import { DesignationModule } from '../designation/designation.module';
import { BranchModule } from '../branch/branch.module';
import { DepartmentModule } from '../department/department.module';
import { FinancialYearModule } from '../financial-year/financial-year.module';
import { PayrollModule } from '../payroll/payroll.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { HolidaysModule } from '../holidays/holidays.module';
import { ShiftsModule } from '../shifts/shifts.module';
import { DocumentsModule } from '../documents/documents.module';
@NgModule({
  declarations: [
    AddComponent,
    AdminComponent,
    ListComponent,
    DashboardComponent,
    DashboardCardComponent,
    ViewComponent,
    OverviewComponent,
    FilterFormComponent,
  ],

  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    CoreModule,
    AttendanceModule,
    SharedModule,
    SettingsModule,
    DesignationModule,
    DepartmentModule,
    PayrollModule,
    HolidaysModule,
    MatExpansionModule,
    FinancialYearModule,
    FlexLayoutModule,
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
    MatGridListModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSlideToggleModule,
    LayoutModule,
    MatDatepickerModule,
    MatDialogModule,
    ShiftsModule,
    DocumentsModule
  ],
  exports: [AdminComponent],
  providers: [
    MatNativeDateModule,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
})
export class AdminModule {}
