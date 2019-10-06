import { SzFormControl } from '../models/control';

export abstract class SzBaseModel {
    constructor(obj: any) {
        if (obj) {
            for (const key in obj) {
                if (key && this.hasOwnProperty(key) && obj[key] !== 'function') {
                    this[key] = SzFormControl.create(this[key].formControlName, obj[key])
                }
            }
        }
    }
}
