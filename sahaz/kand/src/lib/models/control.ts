import { SzBaseControlProperty } from '../abstract/base-control-properties.abtract';

export class SzControl extends SzBaseControlProperty {
    constructor(obj: Partial<SzBaseControlProperty>) {
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
