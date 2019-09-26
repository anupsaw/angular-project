
import { Input } from '@angular/core';
export abstract class SzBaseControlProperty {

    @Input() public id: string;
    @Input() public name: string;
    @Input() public type: string;
    @Input() public value: any;
    @Input() public label: string;
    @Input() public disable: boolean;
    @Input() public required: boolean;
    @Input() public readonly: boolean;
    @Input() public placeholder: string;
    @Input() public formControlName: string;

    @Input() public set props(props: SzBaseControlProperty) {

        const exclude = ['props'];
        if (props) {
            for (const key in props) {
                if (key && this.hasOwnProperty(key) && typeof props[key] !== 'function' && exclude.indexOf(key) !== -1) {
                    this[key] = props[key];
                }
            }
        }
    }
    public disabled: boolean;

}
