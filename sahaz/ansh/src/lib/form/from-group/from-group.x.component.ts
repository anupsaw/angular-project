import {
  Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy,
  Input, Optional, Host, SkipSelf, ChangeDetectorRef, ComponentRef,
  ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, Type, Output, EventEmitter, HostBinding
} from '@angular/core';
import { SzFormControl, SzFormControlType, SzFormGroup, SzDirectionType } from '@sahaz/kand';
import { ControlContainer, FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { SzActionOnControl, SzFormElement, SzAction } from './from-group.directive';
import { BehaviorSubject } from 'rxjs';
import {
  SzInputComponent, SzSelectComponent, SzAutoCompleteComponent,
  SzTextareaComponent, SzRadioComponent, SzCheckboxComponent, SzRadioGroupComponent
} from '@sahaz/mool';

export type SzElement = SzInputComponent;

const components: { [type: string]: Type<SzFormElement> } = {
  [SzFormControlType.Input]: SzInputComponent,
  [SzFormControlType.Select]: SzSelectComponent,
  [SzFormControlType.AutoComplete]: SzAutoCompleteComponent,
  [SzFormControlType.Textarea]: SzTextareaComponent,
  [SzFormControlType.Radio]: SzRadioComponent,
  [SzFormControlType.Checkbox]: SzCheckboxComponent,
  [SzFormControlType.RadioGroup]: SzRadioGroupComponent
};

@Component({
  selector: 'sz-form-group-x',
  templateUrl: './from-group.x.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SzFromGroupXComponent implements OnInit, AfterViewInit {

  private componentRef = new Map<string, ComponentRef<SzFormElement | SzFromGroupXComponent>>();
  private focusChangeEvent = new BehaviorSubject({ name: '', focus: false });

  public focusChanges = this.focusChangeEvent.asObservable();
  public formGroup: FormGroup;
  public index: number;

  @ViewChild('formContent', { read: ViewContainerRef, static: false }) public container: ViewContainerRef;
  @Input() public formControls: { [key: string]: SzFormControl };
  @Input() public groupName: string;
  @Input() public flexDirection: SzDirectionType;

  @Output() action = new EventEmitter<SzActionOnControl>();

  @HostBinding('class') public get flexDirectionClass(): string {
    return this.flexDirection === 'row' ? 'sz-flex-row' : 'sz-flex-column';
  }

  constructor(
    @Optional() @Host() @SkipSelf() private parent: ControlContainer,
    private readonly resolver: ComponentFactoryResolver,
    private readonly cd: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.initForm();
    console.log(this.formGroup);
  }

  public ngAfterViewInit() {

  }

  // TODO : need to include formArray
  private initForm(): void {
    const parent = this.parent.control as FormGroup;
    if (this.groupName) {
      const hasFormGroup = parent.get(this.groupName);
      if (hasFormGroup instanceof FormGroup) {
        this.formGroup = hasFormGroup;
      } else {
        this.formGroup = new FormGroup({});
        parent.addControl(this.groupName, this.formGroup);
      }
    } else {
      this.formGroup = parent;
    }

    // } else if (this.formArrayName) {
    //   this.formGroup = parent.get(this.formArrayName) as FormArray;
    // } else {
    //   this.formGroup = parent;
    // }
  }

  private createControls(controls: { [key: string]: SzFormControl | SzFormGroup }): void {
    for (const key in controls) {
      if (key && controls[key] instanceof SzFormControl) {
        this.createControl(controls[key]);
      }
    }
  }

  private createControl(control: SzFormControl | SzFormGroup): void {
    if (control instanceof SzFormControl) {
      this.formControls[control.formControlName] = control;
      this.addControlToFormGroup(control);
      this.create(components[control.element], control);
      // throw new Error(`Invalid control type`);
    } else if (control instanceof SzFormGroup) {
      this.createGroup(SzFromGroupXComponent, control);
    }

    this.refresh();
  }

  private createGroup(component: Type<SzFromGroupXComponent>, props: SzFormGroup): void {
    const componentRef = this.resolver.resolveComponentFactory<SzFromGroupXComponent>(component);
    const ref = componentRef.create(this.container.injector);

    ref.instance.formControls = {};
    ref.instance.groupName = props.formGroupName;
    ref.instance.flexDirection = props.flexDirection;
    ref.instance.index = props.index;

    if (!props.index && props.index !== 0) {
      props.index = this.container.length;
    }

    this.container.insert(ref.hostView);
    this.componentRef.set(name, ref);
    console.log(this.componentRef);
  }

  private create(component: Type<SzFormElement>, props: SzFormControl): void {
    const componentRef = this.resolver.resolveComponentFactory<SzFormElement>(component);
    const ref = componentRef.create(this.container.injector);

    if (ref.instance instanceof SzSelectComponent) {
      ref.instance.options = props.options;
    }

    const name = props.formControlName;
    ref.instance.formControlName = name;
    ref.instance.value = props.value || '';
    ref.instance.props = props;
    ref.instance.ngControl.name = name;
    (ref.instance.ngControl as any).control = this.formGroup.get(name);

    if (!props.index && props.index !== 0) {
      props.index = this.container.length;
    }
    this.container.insert(ref.hostView);
    this.componentRef.set(name, ref);
    console.log(this.componentRef);
  }

  /**
   *
   * @param control Add new control
   */
  public addControl(control: SzFormControl | SzFormGroup | { [key: string]: SzFormControl | SzFormGroup }): void {

    if (!control) {
      throw new Error('Not a valid control');
    }
    if (control instanceof SzFormControl || control instanceof SzFormGroup) {
      this.createControl(control);
    } else {
      this.createControls(control);
    }
  }

  public removeControl(formControl: SzFormControl | { [key: string]: SzFormControl }): void {

    if (formControl) {
      throw new Error('Not a valid control');
    }

    let controls: SzFormControl | { [key: string]: SzFormControl };
    if (formControl instanceof SzFormControl) {
      controls = { [formControl.formControlName]: formControl };
    } else {
      controls = formControl;
    }

    for (const key in controls) {
      if (key) {
        const control = controls[key];
        if (control && control instanceof SzFormControl) {
          const compRef = this.componentRef.get(control.formControlName);
          // compRef.instance.value = '';
          const index = this.container.indexOf(compRef.hostView);
          this.removeFormGroupControl(control);

          if (index !== -1) {
            this.container.remove(index);
            this.refresh();
          }

        }
      }

    }
  }

  private removeFormGroupControl(control: SzFormControl): void {

    if (control) {
      const formControl = this.formGroup.get(control.formControlName) as FormControl;
      this.formGroup.removeControl(control.formControlName);
      this.action.emit(SzActionOnControl.create(control.formControlName, formControl, SzAction.Removed));
    }

  }

  private addControlToFormGroup(control: SzFormControl): void {
    control.validators = control.required ? [Validators.required, ...control.validators] : control.validators;

    const formControl = new FormControl(
      { value: control.value, disabled: control.disable || false },
      control.validators, control.asyncValidators
    );
    this.formGroup.addControl(control.formControlName, formControl);
    this.action.emit(SzActionOnControl.create(control.formControlName, formControl, SzAction.Added));
  }

  public refresh(): void {
    this.cd.detectChanges();
  }

}
