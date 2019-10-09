import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { SzFromGroupComponent } from '@sahaz/ansh';
import { ConfigFrom } from '../config-form-ui/config-form.model';

@Component({
  selector: 'app-add-form-control',
  templateUrl: './add-form-control.component.html',
  styleUrls: ['./add-form-control.component.scss']
})
export class AddFormControlComponent implements OnInit {

  form: FormGroup;
  fromArrayControl: FormArray;
  formControls: any = {};

  @ViewChild(SzFromGroupComponent, { static: false }) pageFormGroupControls: SzFromGroupComponent;
  constructor() { }

  ngOnInit() {
    this.initForm();
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

}
