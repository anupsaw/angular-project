import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Optional, Self } from '@angular/core';
import { SZ_CONTROL_CONTAINER_PROVIDER, SZ_NG_CONTROL_PROVIDER, SzBaseFormControl } from '@sahaz/kand';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'sz-input',
  templateUrl: './input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SZ_NG_CONTROL_PROVIDER],
  viewProviders: [SZ_CONTROL_CONTAINER_PROVIDER]
})
export class SzInputComponent extends SzBaseFormControl implements OnInit {

  // tslint:disable-next-line: variable-name
  // @ContentChildren(MatErrorComponent) errorChildren: QueryList<MatErrorComponent>;
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.errorMessage = 'Error';
  }

}
