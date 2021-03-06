import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Optional, Self, Input } from '@angular/core';
import { SzBaseFormControl, SZ_NG_CONTROL_PROVIDER, SZ_CONTROL_CONTAINER_PROVIDER, SzOption } from '@sahaz/kand';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'sz-auto-complete',
  templateUrl: './auto-complete.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SZ_NG_CONTROL_PROVIDER],
  viewProviders: [SZ_CONTROL_CONTAINER_PROVIDER]
})
export class SzAutoCompleteComponent extends SzBaseFormControl implements OnInit {

  @Input() options: SzOption<any, any>[];

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit() {
  }

}
