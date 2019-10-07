import { SzBaseFormControlProperty } from '../abstract/base-form-control-properties.abstract';
import { ValidatorFn, AsyncValidatorFn, Validators } from '@angular/forms';
import { SzOption } from './option';

export const enum SzFormControlType {
    Input = 'input',
    Select = 'select',
    AutoComplete = 'autocomplete',
    Radio = 'radio',
    RadioGroup = 'radiogroup',
    Checkbox = 'checkbox',
    Textarea = 'textarea'
}

export class SzFormControl extends SzBaseFormControlProperty {

    public validators: ValidatorFn[];
    public asyncValidators: AsyncValidatorFn[];
    public element: string;
    public options: SzOption<any, any>[];

    private constructor(
        obj: Partial<SzBaseFormControlProperty> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ) {
        super();
        for (const key in obj) {
            if (key && obj[key] !== 'function') {
                this[key] = obj[key];
            }
        }

        this.validators = this.required ? [Validators.required, ...validators] : validators;
        this.asyncValidators = asyncValidators;
    }

    public static create(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        return new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
    }

    public static input(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = SzFormControlType.Input;
        return control;
    }

    public static select(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = SzFormControlType.Select;
        return control;
    }

    public static checkbox(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = SzFormControlType.Checkbox;
        return control;
    }

    public static radio(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = SzFormControlType.Radio;
        return control;
    }

    public static radioGroup(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = SzFormControlType.RadioGroup;
        return control;
    }

    public static autocomplete(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = SzFormControlType.AutoComplete;
        return control;
    }

    public static textarea(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = SzFormControlType.Textarea;
        return control;
    }
}
