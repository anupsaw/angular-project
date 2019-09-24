import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzSelectComponent } from './select.component';

@NgModule({
  declarations: [SzSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [SzSelectComponent]
})
export class SzSelectModule { }
