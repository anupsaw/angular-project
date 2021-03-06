import { OnInit, OnChanges, AfterViewInit, HostListener, HostBinding } from '@angular/core';
import { ControlValueAccessor, NgControl, ControlContainer, FormGroupDirective, FormControlName } from '@angular/forms';
import { SzBaseFormControlProperty } from './base-form-control-properties.abstract';
import { BehaviorSubject } from 'rxjs';

export const SZ_CONTROL_CONTAINER_PROVIDER = { provide: ControlContainer, useExisting: FormGroupDirective };
export const SZ_NG_CONTROL_PROVIDER = { provide: NgControl, useClass: FormControlName };
export abstract class SzBaseFormControl extends SzBaseFormControlProperty
    implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {

    private focusChangeEvent = new BehaviorSubject(false);
    public focusChanges = this.focusChangeEvent.asObservable();

    @HostListener('focusout')
    public onFocusOut(): void {
        this.focusChangeEvent.next(false);
    }

    @HostListener('focusin')
    public onFocusIn(): void {
        this.focusChangeEvent.next(true);
    }

    @HostBinding('class') get hostClass() { return this.classList; }

    constructor(public readonly ngControl: NgControl) {
        super();
        console.log(this.ngControl);
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

    public onChange(_: any): void { }

    public onTouched(): void { }

}
