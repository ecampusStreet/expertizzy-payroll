import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective } from './pipes';


@NgModule({
  declarations: [NumberDirective],
  imports: [
    CommonModule
  ],
  exports:[NumberDirective]
})
export class CoreModule { }
