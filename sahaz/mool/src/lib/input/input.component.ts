import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Optional, Self } from '@angular/core';
import { CONTROL_CONTAINER_PROVIDER, SzBaseControl } from '@sahaz/kand';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'sz-input',
  templateUrl: './input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CONTROL_CONTAINER_PROVIDER]
})
export class SzInputComponent extends SzBaseControl implements OnInit {

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit() {
  }

}
