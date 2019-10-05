import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { matCommonErrorMessagesProvider } from './error-message.registry';
import { SzErrorComponent } from '../error/error.component';
import { SzErrorDirective } from './error.directive';

@NgModule({
  declarations: [SzErrorComponent, SzErrorDirective],
  imports: [
    CommonModule
  ],
  providers: [matCommonErrorMessagesProvider],
  exports: [SzErrorComponent, SzErrorDirective]
})
export class SzErrorModule { }
