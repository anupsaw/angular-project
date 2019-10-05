import { SzBaseFormControlProperty } from '../abstract/base-form-control-properties.abstract';

export class SzControl extends SzBaseFormControlProperty {
    constructor(obj: Partial<SzBaseFormControlProperty>) {
        super();
        for (const key in obj) {
            if (key) {
                this[key] = obj[key];
            }
        }
    }

    public static create(formControlName: string): SzControl {
        return new SzControl({ formControlName });
    }
}
