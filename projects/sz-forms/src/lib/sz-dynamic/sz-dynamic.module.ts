import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzBaseControl } from '../components/control/sz-base-control.abstract';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SzDynamicModule { }

export function createNewComponent(selector: string, tmpl: string) {
  @Component({
    selector: selector,
    template: tmpl,
    encapsulation: ViewEncapsulation.Emulated
  })
  class CustomDynamicComponent extends SzBaseControl {
  };
  return CustomDynamicComponent;
}
