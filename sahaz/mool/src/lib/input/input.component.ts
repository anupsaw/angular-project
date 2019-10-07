import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Optional, Self, Host, SkipSelf } from '@angular/core';
import { SZ_CONTROL_CONTAINER_PROVIDER, SZ_NG_CONTROL_PROVIDER, SzBaseFormControl } from '@sahaz/kand';
import { NgControl, ControlContainer, FormArrayName } from '@angular/forms';

@Component({
  selector: 'sz-input',
  templateUrl: './input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SZ_NG_CONTROL_PROVIDER],
  viewProviders: [SZ_CONTROL_CONTAINER_PROVIDER]
})
export class SzInputComponent extends SzBaseFormControl implements OnInit {

  arrayName: string;
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer
  ) {
    super(ngControl);
    console.log(this.controlContainer);
    if (this.controlContainer instanceof FormArrayName) {
      this.arrayName = this.controlContainer.name;
    }

  }

  ngOnInit() {
    this.errorMessage = 'Error';
    console.log(this.controlContainer, this.ngControl);

  }

}
