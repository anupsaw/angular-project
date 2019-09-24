import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SzInputComponent } from './input.component';

@NgModule({
  declarations: [SzInputComponent],
  imports: [
    CommonModule
  ],
  exports: [SzInputComponent]
})
export class SzInputModule { }
