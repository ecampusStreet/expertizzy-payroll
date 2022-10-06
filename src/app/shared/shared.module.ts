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
import { EmpViewComponent } from './components/emp-view/emp-view.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { CardListComponent } from './components/card-list/card-list.component';
import {MatTableModule} from '@angular/material/table';
import { ContentNavbarComponent } from './components/content-navbar/content-navbar.component';
@NgModule({
  declarations: [
    TabledataComponent,
    EmpViewComponent,
    CardListComponent,
    ContentNavbarComponent
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
    MatTableModule
  ],
  exports: [
    TabledataComponent,
    CardListComponent,
    ContentNavbarComponent
  ]
})
export class SharedModule { }
