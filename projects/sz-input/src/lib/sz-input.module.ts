import { NgModule } from '@angular/core';
import { SzInputComponent } from './sz-input.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [SzInputComponent],
  imports: [MatInputModule
  ],
  exports: [SzInputComponent]
})
export class SzInputModule { }
