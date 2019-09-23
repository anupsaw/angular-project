import {
  Component, OnInit, ElementRef, NgZone, DoCheck, ComponentFactoryResolver,
  ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, Input, Optional, Self, forwardRef
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, NgControl, ControlContainer, FormControlDirective, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { SzBaseControl } from '../control/sz-base-control.abstract';

@Component({
  selector: 'sz-input',
  templateUrl: './sz-input.component.html',
  styleUrls: ['./sz-input.component.scss']
})
export class SzInputComponent extends SzBaseControl implements OnInit, AfterViewInit, DoCheck {

  

  constructor(
    @Optional() @Self() public control: NgControl,
    private readonly eleRef: ElementRef,
    private readonly cd: ChangeDetectorRef,
    private readonly zone: NgZone,
    private readonly resolver: ComponentFactoryResolver,
    private sanitizer: DomSanitizer) {
    // super(control);
    super(control);
  }

  data: any;

  config = {
    field: 'input',
    properties: {
      type: 'text',
      name: 'Name',
      placeholder: 'Type Your Name..',
      formControlName: 'name',
      class: 'one two three',
      required: true
    }

  }

  val: any

  ngOnInit() {

  }



  ngAfterViewInit() {
    // this.zone.run(() => {
    //   this.intiControl();
    // })
    // this.refresh();
  }

  ngDoCheck() {
    // console.log('do check called');
    // this.cd.markForCheck();
  }


  intiControl(): void {
    let props = this.config.properties;

    let ele = document.createElement(this.config.field);
    let input = `<${this.config.field} `;
    for (let key of Object.keys(this.config.properties)) {
      ele.setAttribute(key, props[key]);
      input += ` ${key}="${props[key]}"`;

    }
    input += ` />`;

    this.data = this.sanitizer.bypassSecurityTrustHtml(input);

    // (<HTMLElement>this.eleRef.nativeElement).append(ele);
    console.log(input);
  }

  refresh(): void {
    this.cd.detectChanges();
  }

}
