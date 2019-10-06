import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzTextareaComponent } from '../textarea/textarea.component';

@NgModule({
  declarations: [SzTextareaComponent],
  imports: [
    CommonModule
  ],
  exports: [SzTextareaComponent],
  entryComponents: [SzTextareaComponent]
})
export class SzTextareaModule { }
