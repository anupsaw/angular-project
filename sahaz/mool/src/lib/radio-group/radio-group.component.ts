import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Optional, Self } from '@angular/core';
import { SzBaseFormControl, SZ_NG_CONTROL_PROVIDER, SZ_CONTROL_CONTAINER_PROVIDER } from '@sahaz/kand';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'sz-radio-group',
  templateUrl: './radio-group.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SZ_NG_CONTROL_PROVIDER],
  viewProviders: [SZ_CONTROL_CONTAINER_PROVIDER]
})
export class SzRadioGroupComponent extends SzBaseFormControl implements OnInit {

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit() {
  }

}
