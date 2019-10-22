import {
  Component, OnInit, Input, SimpleChanges, OnChanges,
  Inject, ChangeDetectorRef, ViewChild, ElementRef, EventEmitter, Output
} from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { ConfigFrom } from '../config-form-ui/config-form.model';
import { SzFormControl, SzBaseComponent, SzFormGroup } from '@sahaz/kand';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { SzFromGroupXComponent } from '@sahaz/ansh/src/lib/form/from-group/from-group.x.component';

@Component({
  selector: 'app-add-form-control',
  templateUrl: './add-form-control.component.html',
  styleUrls: ['./add-form-control.component.scss']
})
export class AddFormControlComponent extends SzBaseComponent implements OnInit, OnChanges {

  @Input() form: FormGroup;
  @Input() control: { type: string };
  @Input() updatedControl: SzFormControl;
  fromArrayControl: FormArray;
  formControls: any = {};
  dynamicControlCounter = 0;
  private dynamicControlMap = new Map<string, SzFormControl>();

  @Output() controlClick = new EventEmitter<any>();
  // @ViewChild(SzFromGroupComponent, { static: false }) pageFormGroupControls: SzFromGroupComponent;
  @ViewChild(SzFromGroupXComponent, { static: false }) pageFormGroupControls: SzFromGroupXComponent;
  constructor(
    @Inject(DOCUMENT) public readonly document: Document,
    private cd: ChangeDetectorRef,
    private ele: ElementRef
  ) { super(); }

  ngOnInit() {
    this.initForm();
    this.onControlClick();

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
        readonly: true, label: `_click_to_edit_properties_${this.dynamicControlCounter}`,
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
    const selectors = this.ele.nativeElement.querySelectorAll('input, select');
    selectors.forEach((selector: HTMLElement) => {

      if (!selector.hasAttribute('sz-dynamic-identifier')) {
        selector.setAttribute(`sz-dynamic-identifier`, `sz-${this.dynamicControlCounter}`);
        selector.style.cursor = 'pointer';

        // const element: HTMLElement = selector.querySelector('input, select');
        // // tslint:disable-next-line: no-unused-expression
        // element && (element.style.cursor = 'pointer');

        // this.zone.run(() => {
        fromEvent(selector, 'click').subscribe((event: Event) => {
          console.log((event.currentTarget as any).getAttribute('sz-dynamic-identifier'));
          const controlId = (event.currentTarget as any).getAttribute('sz-dynamic-identifier');
          const val = this.dynamicControlMap.get(controlId);
          console.log(val);
          this.controlClick.emit(val);
          this.cd.markForCheck();
          //   });
        });

        console.log(selector);
      }

    });
    this.dynamicControlCounter++;

    console.log(this.formControls);
  }

  findParent(ele: HTMLElement, search: string): HTMLElement {

    let parent: any = ele;
    while (!parent.querySelector(search)) {
      parent = parent.parentNode;
    }
    return parent;
  }

}
