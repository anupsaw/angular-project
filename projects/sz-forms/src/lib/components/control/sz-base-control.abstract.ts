
import { Optional, Self, Input } from '@angular/core';
import { ControlValueAccessor, NgControl, FormControl, FormGroup } from '@angular/forms';

export class SzBaseControl implements ControlValueAccessor {

    @Input() public formControlName: string;
    @Input() formGroup: FormGroup;
    @Input() public type: string;
    @Input() value: any;

    constructor(@Optional() @Self() public control: NgControl) {
        console.log(control);
        if (this.control) {
            this.control.valueAccessor = this;
        }
    }

    writeValue(value: any): void {
        this.value = value;
    }
    registerOnChange(fn: any): void {

    }
    registerOnTouched(fn: any): void {
    }

    setDisabledState?(isDisabled: boolean): void {
    }


}