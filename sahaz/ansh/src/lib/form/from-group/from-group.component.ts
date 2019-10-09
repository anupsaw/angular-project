import {
  Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy,
  Input, Optional, Host, SkipSelf, ChangeDetectorRef
} from '@angular/core';
import { SzFormControl } from '@sahaz/kand';
import { ControlContainer, FormGroup, FormArray } from '@angular/forms';
import { SzDynamicModel, SzActionOnControl } from './from-group.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'sz-form-group',
  templateUrl: './from-group.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SzFromGroupComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _formControls: object | { [key: string]: SzFormControl };
  @Input() public set formControls(controls: object | { [key: string]: SzFormControl }) {
    if (controls) {
      this._formControls = controls;
      for (const key in controls) {
        if (key && controls[key] !== 'function' && controls[key] instanceof SzFormControl) {
          this.controls.push(controls[key]);
        }
      }
    }
  }

  public get formControls(): object | { [key: string]: SzFormControl } {
    return this._formControls;
  }
  @Input() public groupName: string;
  @Input() public formArrayName: string;

  private actionCompleteEvent = new Subject<SzActionOnControl>();
  public actionComplete = this.actionCompleteEvent.asObservable();

  public formGroup: FormGroup | FormArray;
  public controls: SzFormControl[] = [];

  constructor(
    @Optional() @Host() @SkipSelf() public parent: ControlContainer,
    private readonly cd: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.initForm();
    console.log(this.formGroup);
  }

  private initForm(): void {
    const parent = this.parent.control as FormGroup;
    if (this.groupName) {
      this.formGroup = new FormGroup({});
      parent.addControl(this.groupName, this.formGroup);
    } else if (this.formArrayName) {
      this.formGroup = parent.get(this.formArrayName) as FormArray;
    } else {
      this.formGroup = parent;
    }
  }

  public addControl(control: SzFormControl): void {
    if (control && control instanceof SzFormControl) {

      if (!this._formControls.hasOwnProperty(control.formControlName)) {
        this._formControls[control.formControlName] = control;
        this.controls.push(control);
        this.refresh();
      } else {
        throw new Error(`Duplicate form control name. ${control.formControlName} already added.`);
      }

    }
  }

  public addControls(controls: { [key: string]: SzFormControl }): void {
    if (controls) {
      for (const key in controls) {
        if (key) {
          this.addControl(controls[key]);
        }
      }
    }
  }

  public removeControl(control: SzFormControl): void {
    if (control && control instanceof SzFormControl) {
      const index = this.findControlIndex(control);
      delete this._formControls[control.formControlName];
      this.controls.splice(index, 1);
      this.refresh();
    }
  }

  public removeControls(controls: SzDynamicModel): void {
    if (controls) {
      for (const key in controls) {
        if (key) {
          this.removeControl(controls[key]);
        }
      }
    }
  }

  private findControlIndex(control: SzFormControl): number {

    let count = 0;
    for (const ctrl of this.controls) {

      if (ctrl.formControlName === control.formControlName) {
        break;
      } else {
        count++;
      }
      return count;

    }

  }

  public refresh(): void {
    this.cd.detectChanges();
  }

}
