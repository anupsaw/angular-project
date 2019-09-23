import { Directive, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormField } from '@angular/material';

@Directive({
  selector: 'mat-form-field[matError]'
})
export class MatErrorExtDirective implements AfterViewInit {


  constructor(private readonly matField: MatFormField) {
    console.log('I have called');
  }


  ngAfterViewInit(): void {
    //   console.log(this.control);
    console.log(this.matField);
    this.matField._control.stateChanges.subscribe((state: any) => {
      console.log(this.matField._control.errorState);
      console.log(this.matField._control.ngControl.errors);
    })
  }

}
