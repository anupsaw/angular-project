import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzRadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [SzRadioGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [SzRadioGroupComponent],
  entryComponents: [SzRadioGroupComponent]
})
export class SzRadioGroupModule { }
