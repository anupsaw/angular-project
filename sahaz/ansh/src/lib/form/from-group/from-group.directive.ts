import {
  Directive, Input, Output, EventEmitter,
  ComponentFactoryResolver, ViewContainerRef,
  OnInit, ComponentRef, Type, NgZone, AfterViewInit, ChangeDetectorRef
} from '@angular/core';
import { SzFormControl } from '@sahaz/kand';
import { FormGroup, FormControl } from '@angular/forms';
import { SzInputComponent } from '@sahaz/mool/src/lib/input/input.component';
import { SzSelectComponent } from '@sahaz/mool/src/lib/select/select.component';
import { first } from 'rxjs/internal/operators/first';

export const enum SzAction {
  Added = 'added',
  Removed = 'removed',
  Destroyed = 'destroyed'
}

export class SzControlDynamicProps {
  showControl: () => void;
  hideControl: () => void;
  destroyControl: () => void;
}

export class SzActionOnControl {
  public formControl: FormControl;
  public formControlName: string;
  public action: SzAction;

  private constructor(name: string, control: FormControl, action: SzAction) {
    this.formControl = control;
    this.formControlName = name;
    this.action = action;
  }

  public static create(formControlName: string, formControl: FormControl, action: SzAction): SzActionOnControl {
    return new SzActionOnControl(formControlName, formControl, action);
  }

}

const components: { [type: string]: Type<SzFormElement> } = {
  input: SzInputComponent,
  select: SzSelectComponent
};

export type SzFormElement = SzInputComponent | SzSelectComponent;

@Directive({
  selector: '[szFormGroup]'
})
export class SzFromGroupDirective implements OnInit, AfterViewInit {
  @Input() public controlProps: SzFormControl & SzControlDynamicProps;
  @Input() public controlFormGroup: FormGroup;

  @Output() public controlAction = new EventEmitter<SzActionOnControl>();

  public component: ComponentRef<SzFormElement>;
  constructor(
    private readonly resolver: ComponentFactoryResolver,
    private readonly container: ViewContainerRef,
    private readonly zone: NgZone,
    private readonly cd: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.create();
  }

  ngAfterViewInit(): void {
    // this.create();
    // // this.zone.onStable.pipe(first()).subscribe(() => {
    // //   // your code here
    // //   this.create();
    // //   this.cd.detectChanges();
    // // });
  }

  private create(): void {

    if (!components[this.controlProps.element]) {
      throw new Error(`${this.controlProps.element} type component not supported. please correct or change element type.`)
    }

    this.addControlToFormGroup();
    this.createComponent();
    // setTimeout(() => this.createComponent());

  }

  private createComponent(): void {
    const component = this.resolver.resolveComponentFactory(components[this.controlProps.element]);
    this.component = component.create(this.container.injector);
    this.assignControlPropsAndInsertView();
    this.addDynamicPropsToControl();
  }

  private addDynamicPropsToControl(): void {
    this.controlProps.showControl = () => 1;
    this.controlProps.hideControl = () => 1;
    this.controlProps.destroyControl = () => 1;
  }

  private assignControlPropsAndInsertView(): void {
    if (this.component.instance instanceof SzSelectComponent) {
      this.component.instance.options = this.controlProps.options;
    }
    this.component.instance.formControlName = this.controlProps.formControlName;
    this.component.instance.value = this.controlProps.value || '';
    this.component.instance.props = this.controlProps;
    (this.component.instance.ngControl as any).control = this.controlFormGroup.get(this.controlProps.formControlName);
    this.component.instance.ngControl.name = this.controlProps.formControlName;

    this.container.insert(this.component.hostView);
  }

  private addControlToFormGroup(): void {
    const formControl = new FormControl({ value: this.controlProps.value || '', disabled: this.controlProps.disable || false },
      this.controlProps.validators, this.controlProps.asyncValidators);
    this.controlFormGroup.addControl(this.controlProps.formControlName, formControl);
  }

}
