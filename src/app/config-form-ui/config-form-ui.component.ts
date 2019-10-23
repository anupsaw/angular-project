import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { ConfigFrom } from './config-form.model';
import { FormGroup } from '@angular/forms';
import { SzFormControl } from '@sahaz/kand';

@Component({
  selector: 'app-config-form-ui',
  templateUrl: './config-form-ui.component.html',
  styleUrls: ['./config-form-ui.component.scss']
})
export class ConfigFormUiComponent implements OnInit, OnChanges {

  formControls = ConfigFrom.create();
  form = new FormGroup({});
  @Input() data: SzFormControl;

  @Output() update = new EventEmitter<SzFormControl>();
  @Output() cancel = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.form.patchValue(changes.data.currentValue);
    }
  }

  public onSave(): void {
    this.update.next(this.form.value);
    console.log(this.form);
  }

  public onClose(): void {
    this.cancel.next(true);
  }

}
