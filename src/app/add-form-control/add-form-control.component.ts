import {
  Component, OnInit, Input, SimpleChanges, OnChanges,
  Inject, ChangeDetectorRef, ViewChild, ElementRef, EventEmitter, Output, ComponentFactoryResolver, ViewContainerRef, AfterViewInit, ComponentRef
} from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { ConfigFrom } from '../config-form-ui/config-form.model';
import { SzFormControl, SzBaseComponent, SzFormGroup } from '@sahaz/kand';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { SzFromGroupXComponent } from '@sahaz/ansh/src/lib/form/from-group/from-group.x.component';
import { ControlActionButtonComponent } from './control-action-button.component';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/internal/operators';

@Component({
  selector: 'app-add-form-control',
  templateUrl: './add-form-control.component.html',
  styleUrls: ['./add-form-control.component.scss']
})
export class AddFormControlComponent extends SzBaseComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() form: FormGroup;
  @Input() control: { type: string };
  @Input() updatedControl: SzFormControl;
  private ref: ComponentRef<ControlActionButtonComponent>;
  fromArrayControl: FormArray;
  formControls: any = {};
  dynamicControlCounter = 0;
  private currentId: string;
  private dynamicControlMap = new Map<string, SzFormControl>();

  @Output() controlClick = new EventEmitter<any>();
  // @ViewChild(SzFromGroupComponent, { static: false }) pageFormGroupControls: SzFromGroupComponent;
  @ViewChild(SzFromGroupXComponent, { static: false }) pageFormGroupControls: SzFromGroupXComponent;
  constructor(
    @Inject(DOCUMENT) public readonly document: Document,
    private cd: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver,
    private ele: ElementRef,
    private container: ViewContainerRef
  ) { super(); }

  ngOnInit() {
    this.initForm();
    this.onControlClick();

  }

  ngAfterViewInit() {
    console.log(this.container, 'Anup Saw');
  }

  public ngOnChanges(changes: SimpleChanges): void {

    // tslint:disable-next-line: no-unused-expression
    changes && changes.control && changes.control.currentValue && this.addNewControl(changes.control.currentValue.type);
    // tslint:disable-next-line: no-unused-expression
    changes && changes.updatedControl
      && changes.updatedControl.currentValue && this.onControlUpdate(changes.updatedControl.currentValue);
  }

  initForm() {
    this.fromArrayControl = new FormArray([new FormControl(), new FormControl()]);
    this.form = new FormGroup({});
    console.log(this.form);
  }

  public onControlUpdate(control: SzFormControl): void {
    // let index: number;
    // this.pageFormGroupControls.controls.forEach((item: SzFormControl, i: number) => {
    //   if (item.formControlName === control.formControlName) {
    //     index = i;
    //   }
    // });
    console.log(control);
    // this.pageFormGroupControls.controls.splice(index, 1, control);
  }

  onAddControlClick() {
    console.log(this.pageFormGroupControls);
    // this.pageFormGroupControls.removeControl(SzFormControl.input('name', { label: 'Name', disable: true }));
    // this.pageFormGroupControls.addControl(SzFormControl.input('name', { label: 'Name', disable: true }));

    // const element = SzFormControl.select('element', { label: 'Element Type', required: true });
    // const formControlName = SzFormControl.input('formControlName', {
    //   label: 'Form Control Name',
    //   required: true, hint: 'this name will be control form name'
    // });
    this.pageFormGroupControls.addControl(ConfigFrom.create() as any);

  }

  addNewControl(type: string): void {

    if (type !== 'group') {
      const control = SzFormControl[type](`_new_control_${this.dynamicControlCounter}`, {
        label: `_click_to_edit_properties_${this.dynamicControlCounter}`,
        id: `sz-dynamic-${this.dynamicControlCounter}`, classList: 'sz-disabled-dynamic-field'
      });
      console.log(control);
      this.dynamicControlMap.set(`sz-${this.dynamicControlCounter}`, control);
      this.pageFormGroupControls.addControl(control);

    } else {
      const group = SzFormGroup.create('newGroup');
      this.pageFormGroupControls.addControl(group);
    }
    this.cd.detectChanges();
    this.updateControlEvent();

  }

  onControlClick(): void {

  }

  public updateControlEvent(): void {
    const selectors = this.ele.nativeElement.querySelectorAll('sz-input ,sz-select');
    selectors.forEach((selector: HTMLElement) => {

      if (!selector.hasAttribute('sz-dynamic-identifier')) {
        selector.setAttribute(`sz-dynamic-identifier`, `sz-${this.dynamicControlCounter}`);
        selector.style.cursor = 'pointer';

        // const element: HTMLElement = selector.querySelector('input, select');
        // // tslint:disable-next-line: no-unused-expression
        // element && (element.style.cursor = 'pointer');

        // this.zone.run(() => {
        const subscription = fromEvent(selector, 'mouseenter').pipe(
          distinctUntilChanged((curr: MouseEvent) => {
            const id = (curr.target as HTMLElement).getAttribute('sz-dynamic-identifier');
            return this.currentId === id;
          }
          )).subscribe((event: Event) => {

            console.log('logged');

            const controlId = (event.currentTarget as any).getAttribute('sz-dynamic-identifier');
            this.currentId = controlId;
            this.setSubscriptionWithKey(controlId, subscription);
            const val = this.dynamicControlMap.get(controlId);
            this.onHover(val, selector, subscription);
            this.cd.markForCheck();

            // const sub = fromEvent(selector, 'mouseleave').subscribe((event: Event) => {

            //   sub.unsubscribe();
            //   selector.querySelector('app-control-actions').remove();
            //   this.ref.destroy();
            //   this.ref = null;
            //   this.currentId = null;
            //   this.cd.markForCheck();
            //   //   });
            // });
          });

        console.log(selector);
      }

    });
    this.dynamicControlCounter++;

    console.log(this.formControls);
  }

  public onHover(val: SzFormControl, selector: HTMLElement, subs: Subscription): boolean {

    if (!this.ref) {
      const ref = this.resolver.resolveComponentFactory(ControlActionButtonComponent);
      this.ref = ref.create(this.container.injector);
      // this.ref = this.container.createComponent(ref);
    }
    console.log(selector);
    this.ref.location.nativeElement.style.top = `${selector.getClientRects()[0].top}px`;
    this.ref.location.nativeElement.style.left = `${selector.getClientRects()[0].right - 50}px`;
    selector.appendChild(this.ref.location.nativeElement);
    this.ref.instance.onAddClick = () => { this.controlClick.emit(val); };

    this.ref.instance.onDeleteClick = () => {
      this.pageFormGroupControls.removeControl(val);
      subs.unsubscribe(); this.ref.destroy();
      this.ref = null;
    };

    this.ref.instance.onCancelClick = () => {
      selector.querySelector('app-control-actions').remove();
      this.ref.destroy();
      this.ref = null;
      this.currentId = null;
    };
    this.ref.hostView.detectChanges();
    return true;
  }

  findParent(ele: HTMLElement, search: string): HTMLElement {

    let parent: any = ele;
    while (!parent.querySelector(search)) {
      parent = parent.parentNode;
    }
    return parent;
  }

}
