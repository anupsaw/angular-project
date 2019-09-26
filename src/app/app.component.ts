import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mainForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  public ngOnInit(): void {
    this.formInit();
  }

  public formInit(): void {
    this.mainForm = this.fb.group({
      name: '',
      state: ''
    });
  }
}
