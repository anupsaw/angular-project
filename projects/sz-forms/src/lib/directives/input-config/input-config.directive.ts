import { Directive, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[input-config]'
})
export class SzInputConfigDirective {

  constructor(
    private readonly container: ViewContainerRef,
    private readonly ref: ElementRef
  ) {
    console.log(this.container);

    (<HTMLElement>this.ref.nativeElement).setAttribute('placeholder', 'Hey whats up');

    //(<HTMLElement>this.ref.nativeElement).setAttribute('formControlName', 'name');
  }

}
