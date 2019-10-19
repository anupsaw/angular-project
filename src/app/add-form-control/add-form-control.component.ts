import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges, Inject } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { SzFromGroupComponent } from '@sahaz/ansh';
import { ConfigFrom } from '../config-form-ui/config-form.model';
import { SzFormControl } from '@sahaz/kand';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-add-form-control',
  templateUrl: './add-form-control.component.html',
  styleUrls: ['./add-form-control.component.scss']
})
export class AddFormControlComponent implements OnInit, OnChanges {

  @Input() form: FormGroup;
  @Input() control: { type: string };
  fromArrayControl: FormArray;
  formControls: any = {};

  @ViewChild(SzFromGroupComponent, { static: false }) pageFormGroupControls: SzFromGroupComponent;

  constructor(@Inject(DOCUMENT) private readonly document: Document) { }

  ngOnInit() {
    this.initForm();
    this.onControlClick();
  }

  public ngOnChanges(changes: SimpleChanges): void {

    // tslint:disable-next-line: no-unused-expression
    changes && changes.control && changes.control.currentValue && this.addNewControl(changes.control.currentValue.type);
  }
  initForm() {
    this.fromArrayControl = new FormArray([new FormControl(), new FormControl()]);
    this.form = new FormGroup({});
    console.log(this.form);
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
    this.pageFormGroupControls.addControls(ConfigFrom.create() as any);

  }

  addNewControl(type: string): void {

    if (type) {
      const control = SzFormControl[type]('_new_control_', { disable: true, label: '_click_to_edit_properties_' , id: 'new_1' });
      console.log(control);
      this.pageFormGroupControls.addControl(control);
    }

  }

  onControlClick(): void {
    const selector = this.document.querySelector('app-add-form-control');
    fromEvent(selector, 'click').subscribe((event: Event) => {
      console.log(event);
      //  event.target
    });
  }

  findParent(ele: HTMLElement, search: string): HTMLElement {

    let parent: any = ele;
    while (!parent.querySelector(search)) {
      parent = parent.parentNode;
    }
    return parent;
  }

}
