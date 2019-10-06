import { SzFormControl, SzBaseModel } from '@sahaz/kand';

export class DynamicForm extends SzBaseModel {

    constructor(obj: Partial<DynamicForm> = {}) { super(obj); }
    public firstName = SzFormControl.input('firstName', { label: 'First Name', required: true });
    public lastName = SzFormControl.input('lastName', { label: 'Last Name', required: true });
    public dateOfBirth = SzFormControl.input('dateOfBirth', { label: 'Date Of Birth', required: true });
    public city = SzFormControl.input('city', { label: 'City', required: true, classList: 'anup saw' });

    public static create(): DynamicForm {
        return new DynamicForm();
    }
}
