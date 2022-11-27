import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from './pipes';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NumberDirective],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[NumberDirective]
})
export class CoreModule { }
