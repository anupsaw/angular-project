import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzCheckboxComponent } from '../checkbox/checkbox.component';

@NgModule({
  declarations: [SzCheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [SzCheckboxComponent],
  entryComponents: [SzCheckboxComponent]
})
export class SzCheckboxModule { }
