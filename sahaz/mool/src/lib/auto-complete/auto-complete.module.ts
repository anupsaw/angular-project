import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzAutoCompleteComponent } from './auto-complete.component';

@NgModule({
  declarations: [SzAutoCompleteComponent],
  imports: [
    CommonModule
  ],
  exports: [SzAutoCompleteComponent],
  entryComponents: [SzAutoCompleteComponent]
})
export class SzAutoCompleteModule { }
