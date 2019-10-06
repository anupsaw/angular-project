import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicForm } from './dynamic-form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mainForm: FormGroup;
  public dynamicForm = DynamicForm.create();
  constructor(private readonly fb: FormBuilder) { }

  public ngOnInit(): void {
    this.formInit();
  }

  public formInit(): void {
    this.mainForm = this.fb.group({
    });
  }

  public printForm(): void {
    console.log(this.mainForm);
  }
}
