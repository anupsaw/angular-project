import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatError } from '@angular/material';

import { matCommonErrorMessagesProvider } from './error-message.registry';
import { SzErrorComponent } from '../error/error.component';
import { MatErrorDirective } from './error.directive';

@NgModule({
  declarations: [SzErrorComponent, MatErrorDirective],
  imports: [
    CommonModule
  ],
  providers: [matCommonErrorMessagesProvider, { provide: MatError, useClass: SzErrorComponent }],
  exports: [SzErrorComponent, MatErrorDirective]
})
export class SzErrorModule { }
