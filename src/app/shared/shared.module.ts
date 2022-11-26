import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './components/tabledata/tabledata.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CardListComponent } from './components/card-list/card-list.component';
import { MatTableModule } from '@angular/material/table';
import { ContentNavbarComponent } from './components/content-navbar/content-navbar.component';
import { MatRadioModule } from '@angular/material/radio';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { LeaveComponent } from './components/leave/leave.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GenericConfirmPopupComponent } from './components/generic-confirm-popup/generic-confirm-popup.component';
import { DataModalComponent } from './components/data-modal/data-modal.component';
import { FormsModule } from '@angular/forms';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { NoDataFoundComponent } from '../core/components/no-data-found/no-data-found.component';

@NgModule({
  declarations: [
    TabledataComponent,
    CardListComponent,
    ContentNavbarComponent,
    DashboardCardsComponent,
    LeaveComponent,
    GenericConfirmPopupComponent,
    DataModalComponent,
    ProfilePicComponent,
    NoDataFoundComponent,
  ],
  imports: [
    CommonModule,
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
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
  ],
  exports: [
    TabledataComponent,
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
    MatCheckboxModule,
    MatExpansionModule,
    NoDataFoundComponent,
    TabledataComponent,
    CardListComponent,
    ContentNavbarComponent,
    DashboardCardsComponent,
    LeaveComponent,
    GenericConfirmPopupComponent,
    DataModalComponent,
  ],
})
export class SharedModule {}
