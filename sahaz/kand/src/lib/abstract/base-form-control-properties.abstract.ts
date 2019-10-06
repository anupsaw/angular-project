
import { Input, ContentChildren, QueryList } from '@angular/core';
import { SzErrorComponent } from '../error/error.component';
import { SzControlError } from '../error/error-message.registry';
export abstract class SzBaseFormControlProperty {

    @Input() public id: string;
    @Input() public name: string;
    @Input() public type: string;
    @Input() public hint: string;
    @Input() public value: any;
    @Input() public label: string;
    @Input() public disable: boolean;
    @Input() public required: boolean;
    @Input() public readonly: boolean;
    @Input() public placeholder: string;
    @Input() public errorConfig: SzControlError[];
    @Input() public formControlName: string;
    @Input() public classList: string;

    @Input() public set props(props: SzBaseFormControlProperty) {

        const exclude = ['props', 'errorMessage'];
        if (props) {
            for (const key in props) {
                if (key && typeof props[key] !== 'function' && exclude.indexOf(key) === -1) {
                    this[key] = props[key];
                }
            }
        }
    }

    @ContentChildren(SzErrorComponent) public error: QueryList<SzErrorComponent>;
    public disabled: boolean;
    public errorMessage: string;

}
