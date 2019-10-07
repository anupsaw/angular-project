import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sz-form',
  templateUrl: './form.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'sz-form' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzFormComponent implements OnInit {

  @Input() public formGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
