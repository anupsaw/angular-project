import { OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgControl, ControlContainer, FormGroupDirective } from '@angular/forms';
import { SzBaseControlProperty } from './base-control-properties.abtract';

export const CONTROL_CONTAINER_PROVIDER = { provide: ControlContainer, useExisting: FormGroupDirective };
export abstract class SzBaseControl extends SzBaseControlProperty implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {

    constructor(public readonly ngControl: NgControl) {
        super();

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    public ngOnInit(): void {

    }

    public ngOnChanges(): void {
        // TODO: changes;
    }

    public ngAfterViewInit(): void {

    }
    public writeValue(value: any): void {
        this.value = value;

    }
    public registerOnChange(fn: any): void {
        this.onChange = fn;

    }
    public registerOnTouched(fn: any): void {

        this.onTouched = fn;
    }
    public setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public onChange(): void { }

    public onTouched(): void { }

}
