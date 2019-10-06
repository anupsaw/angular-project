import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Optional, Self } from '@angular/core';
import { SzBaseFormControl, SZ_NG_CONTROL_PROVIDER, SZ_CONTROL_CONTAINER_PROVIDER, SzOption } from '@sahaz/kand';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'sz-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SZ_NG_CONTROL_PROVIDER],
  viewProviders: [SZ_CONTROL_CONTAINER_PROVIDER]
})
export class SzSelectComponent extends SzBaseFormControl implements OnInit {

  @Input() options: SzOption<any, any>[];

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.options = [{ value: 'ang', description: 'Angular' }];
  }

}
