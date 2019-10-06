import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Optional, Host, SkipSelf } from '@angular/core';
import { SzFormControl } from '@sahaz/kand';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'sz-form-group',
  templateUrl: './from-group.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // viewProviders: [SZ_CONTROL_CONTAINER_PROVIDER]
})
export class SzFromGroupComponent implements OnInit {

  @Input() public set formControls(controls: { [key: string]: SzFormControl }) {
    if (controls) {
      for (const key in controls) {
        if (key) {
          this.controls.push(controls[key]);
        }
      }
    }
  }
  @Input() public groupName: string;

  public formGroup: FormGroup;
  public controls: SzFormControl[] = [];
  constructor(@Optional() @Host() @SkipSelf() public parent: ControlContainer) {

  }

  public ngOnInit(): void {
    const parent = this.parent.control as FormGroup;
    if (this.groupName) {
      this.formGroup = new FormGroup({});
      parent.addControl(this.groupName, this.formGroup);
    } else {
      this.formGroup = parent;
    }
    console.log(this.formGroup);
  }

}
