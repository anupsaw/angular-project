import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mainForm: FormGroup;
  public subscription: Subscription;
  constructor(private readonly fb: FormBuilder) { }
  drawArea = document.querySelector('#draw');
  public ngOnInit(): void {
    this.formInit();
    fromEvent(this.drawArea, 'mousedown').subscribe((data: MouseEvent) => {

      this.subscription = fromEvent(this.drawArea, 'mousemove').subscribe((val: MouseEvent) => {
        console.log(val);
      });
      console.log(data);
    });

    fromEvent(this.drawArea, 'mouseup').subscribe((data: MouseEvent) => {
      this.subscription.unsubscribe();
      console.log(data);
    });
  }

  public formInit(): void {
    this.mainForm = this.fb.group({
      name: ''
    });
  }

  public printForm(): void {
    console.log(this.mainForm);
  }
}
