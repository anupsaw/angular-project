import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sz-input',
  templateUrl: './input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
