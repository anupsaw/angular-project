import { NgModule } from '@angular/core';
import { AngularMaterialExtComponent } from './angular-material-ext.component';
import { MatErrorExtComponent } from './mat-error-ext/mat-error-ext.component';
import { MatErrorExtDirective } from './mat-error-ext/mat-error-ext.directive';

@NgModule({
  declarations: [AngularMaterialExtComponent, MatErrorExtComponent, MatErrorExtDirective],
  imports: [
  ],
  exports: [AngularMaterialExtComponent]
})
export class AngularMaterialExtModule { }
