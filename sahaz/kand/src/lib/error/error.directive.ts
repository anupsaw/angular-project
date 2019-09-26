import { Directive, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MatControlError } from './error-message.registry';
import { MatFormField } from '@angular/material';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[matError]'
})
export class MatErrorDirective implements AfterViewInit, OnDestroy {

  // private subscription: Subscription;
  // private subscriptions = new Set<Subscription>();
  @Input() public errors: MatControlError[];

  constructor(private readonly matField: MatFormField) { }

  public ngAfterViewInit(): void {
    console.log(this.matField);
  }
  public ngOnDestroy(): void {

  }

}
