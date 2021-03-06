import { SzFormControl, SzFormGroup } from '@sahaz/kand';

export class ConfigFrom {

    public inputType = [{ value: 'text', description: 'Text' }];

    public addressGroup = SzFormGroup.create(null, 'row', 2);

    public element = SzFormControl.select('element', { label: 'Element Type', required: true });
    public formControlName = SzFormControl.input('formControlName', {
        label: 'Form Control Name',
        required: true, hint: 'this name will be control form name'
    });
    public label = SzFormControl.input('label', { placeholder: 'Label1', required: true });
    public id = SzFormControl.input('id', { label: 'ID', placeholder: 'Control Id', hint: 'must be unique' });
    public name = SzFormControl.input('name', { label: 'Name', placeholder: 'Enter Element Name' });
    public type = SzFormControl.autocomplete('type', {
        label: 'Input Type',
        hint: 'only applied for input control', options: this.inputType
    });
    public hint = SzFormControl.textarea('hint', { label: 'Hint' });
    public value = SzFormControl.input('value', { label: 'Initial Value', hint: 'This value will be assigned on initial load.' });

    public disable = SzFormControl.radio('disable', { label: 'Disable', hint: 'control will be disabled on initial load.' });
    public required = SzFormControl.checkbox('required', {
        label: 'Required', group: this.addressGroup
    });
    public readonly = SzFormControl.checkbox('readonly', {
        label: 'Control Readonly',
        group: this.addressGroup,
    });
    public placeholder = SzFormControl.input('placeholder', { label: 'Placeholder' });
    public errorConfig = SzFormControl.input('errors', { label: 'Error' });

    public classList = SzFormControl.input('class', { label: 'Class List', hint: 'must be added classes with space' });

    public static create(): ConfigFrom {
        return new ConfigFrom();
    }
}
