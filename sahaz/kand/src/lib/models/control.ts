import { SzBaseFormControlProperty } from '../abstract/base-form-control-properties.abstract';
import { ValidatorFn, AsyncValidatorFn, Validators } from '@angular/forms';
import { SzOption } from './option';

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
        control.element = 'input';
        return control;
    }

    public static select(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = 'select';
        return control;
    }

    public static checkbox(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = 'checkbox';
        return control;
    }

    public static radio(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = 'radio';
        return control;
    }

    public static radioGroup(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = 'radiogroup';
        return control;
    }

    public static autocomplete(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = 'autocomplete';
        return control;
    }

    public static textarea(
        formControlName: string,
        obj: Partial<SzFormControl> = {},
        validators: ValidatorFn[] = [],
        asyncValidators: AsyncValidatorFn[] = []
    ): SzFormControl {
        const control = new SzFormControl({ formControlName, ...obj }, validators, asyncValidators);
        control.element = 'textarea';
        return control;
    }
}
