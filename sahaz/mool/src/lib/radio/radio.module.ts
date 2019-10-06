import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzRadioComponent } from '../radio/radio.component';

@NgModule({
  declarations: [SzRadioComponent],
  imports: [
    CommonModule
  ],
  exports: [SzRadioComponent],
  entryComponents: [SzRadioComponent]
})
export class SzRadioModule { }
