import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatControlError } from './error-message.registry';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-error',
  template: `<div>{{message}}</div>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzErrorComponent implements OnInit, MatControlError {

  @Input() type: string;
  @Input() message: string;
  @Input() priority: number;

  constructor() { }

  public ngOnInit() {
  }

}
