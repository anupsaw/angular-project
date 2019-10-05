import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, ViewContainerRef } from '@angular/core';
import { SzControlError } from './error-message.registry';

@Component({
  selector: 'sz-error',
  template: `<div>{{message}}<ng-content></ng-content></div>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzErrorComponent implements OnInit, SzControlError {

  @Input() type: string;
  @Input() message: string;
  @Input() priority: number;
  @Input() value?: any;

  constructor(private readonly container: ViewContainerRef) { }

  public ngOnInit() {
  }

  public destroy(): void {
    this.container.clear();
  }
}
