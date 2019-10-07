import { SzBaseComponent } from './base-component.abstract';
import { Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SzAction, SzActionOnControl } from '@sahaz/ansh/src/lib/form/from-group/from-group.directive';

export class SzFormControlActionEvent {
    public formControl: FormControl;
    public formControlName: string;
    public action: SzAction;

    private constructor(name: string, control: FormControl, action: SzAction) {
        this.formControl = control;
        this.formControlName = name;
        this.action = action;
    }

    public static create(formControlName: string, formControl: FormControl, action: SzAction): SzActionOnControl {
        return new SzFormControlActionEvent(formControlName, formControl, action);
    }

}

export abstract class SzBaseFormGroup<T> extends SzBaseComponent implements OnInit, OnDestroy {
    @Input() public formControls: T;
    @Input() public formControlsGroup: FormGroup;
    @Input() public formControlsGroupName: string;

    @Output() public action = new EventEmitter<SzFormControlActionEvent>();

    constructor() { super(); }

    public ngOnInit(): void { }
    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }
}