import { Component, OnInit } from '@angular/core';
import { ConfigFrom } from './config-form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config-form-ui',
  templateUrl: './config-form-ui.component.html',
  styleUrls: ['./config-form-ui.component.scss']
})
export class ConfigFormUiComponent implements OnInit {

  formControls = ConfigFrom.create();
  form = new FormGroup({});
  constructor() {

  }

  ngOnInit() {
  }

}
