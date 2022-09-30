import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  schemas: [NO_ERRORS_SCHEMA],

  declarations: [
    UserComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class UserModule { }
