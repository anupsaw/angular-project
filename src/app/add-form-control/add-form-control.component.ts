import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { SzFromGroupComponent } from '@sahaz/ansh';
import { SzFormControl } from '@sahaz/kand';

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
    this.pageFormGroupControls.removeControl(SzFormControl.input('name', { label: 'Name', disable: true }));
    this.pageFormGroupControls.addControl(SzFormControl.input('name', { label: 'Name', disable: true }));
  }

}
