import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Optional, Self, Input } from '@angular/core';
import { SzBaseFormControl, SZ_NG_CONTROL_PROVIDER, SZ_CONTROL_CONTAINER_PROVIDER } from '@sahaz/kand';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'sz-checkbox',
  templateUrl: './checkbox.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SZ_NG_CONTROL_PROVIDER],
  viewProviders: [SZ_CONTROL_CONTAINER_PROVIDER]
})
export class SzCheckboxComponent extends SzBaseFormControl implements OnInit {

  @Input() labelPosition = 'after';
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit() {
  }

}
