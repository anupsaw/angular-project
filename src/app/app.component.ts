import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs';
import { SzFormControl } from '@sahaz/kand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mainForm: FormGroup;
  public subscription: Subscription;
  public newControl: { type: string };
  public controlProperties: SzFormControl;
  public updatedControlProperty: SzFormControl;

  public showControlConfig: boolean;

  constructor(private readonly fb: FormBuilder) { }
  drawArea: HTMLElement;
  public ngOnInit(): void {
    this.formInit();

  }

  public formInit(): void {
    this.mainForm = this.fb.group({
      name: ''
    });
  }

  public printForm(): void {
    console.log(this.mainForm);
  }

  public onMenuItemClick(type: string): void {
    this.newControl = { type };
  }

  public onUpdate(val: any) {
    this.updatedControlProperty = val;
  }
  public onControlClick(val: any): void {
    console.log(val);
    this.showControlConfig = true;
    setTimeout(() => {
      this.controlProperties = val;
    }, 100);

  }

  public onCancel(): void {
    this.showControlConfig = false;
  }

  public draw(): void {
    this.drawArea = document.querySelector('#draw');
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.position = 'relative';
    let mouseDownData: MouseEvent;
    fromEvent(this.drawArea, 'mousedown').subscribe((data: MouseEvent) => {
      div.style.top = `${data.clientY}px`;
      div.style.left = `${data.clientX}px`;
      mouseDownData = data;
      this.subscription = fromEvent(this.drawArea, 'mousemove').subscribe((val: MouseEvent) => {
        div.style.height = `${val.clientY - mouseDownData.clientY}px`;
        div.style.width = `${val.clientX - mouseDownData.clientX}px`;
        this.drawArea.appendChild(div);
      });
      console.log(data);
    });

    fromEvent(this.drawArea, 'mouseup').subscribe((data: MouseEvent) => {

      div.style.height = `${data.clientY - mouseDownData.clientY}px`;
      div.style.width = `${data.clientX - mouseDownData.clientX}px`;

      this.drawArea.appendChild(div);
      this.subscription.unsubscribe();
      console.log(data);
    });
  }
}
