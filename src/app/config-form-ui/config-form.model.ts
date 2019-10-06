import { SzFormControl } from '@sahaz/kand';

export class ConfigFrom {

    inputType = [{ value: 'text', description: 'Text' }];

    public element = SzFormControl.select('element', { label: 'Element Type', hint: 'must be chosen from given options' });
    public id = SzFormControl.input('id', { label: 'ID', placeholder: 'Control Id', hint: 'must be unique' });
    public name = SzFormControl.input('name', { label: 'Name', placeholder: 'Enter Element Name' });
    public type = SzFormControl.autocomplete('type', {
        label: 'Input Type',
        hint: 'only applied for input control', options: this.inputType
    });
    public hint = SzFormControl.checkbox('hint', { label: 'Hint' });
    public value = SzFormControl.input('value', { label: 'Initial Value', hint: 'This value will be assigned on initial load.' });
    public label = SzFormControl.input('label', { label: 'Label' });
    public disable = SzFormControl.radio('disable', { label: 'Disable', hint: 'control will be disabled on initial load.' });
    public required = SzFormControl.checkbox('required', { label: 'Required', hint: 'is this control mandatory.' });
    public readonly = SzFormControl.input('readonly', { label: 'Control Readonly', hint: 'control will be readonly on initial load.' });
    public placeholder = SzFormControl.input('placeholder', { label: 'Placeholder' });
    public errorConfig = SzFormControl.input('errors', { label: 'Error' });
    public formControlName = SzFormControl.input('formControlName', {
        label: 'Form Control Name',
        required: true, hint: 'this name will be control form name'
    });
    public classList = SzFormControl.input('class', { label: 'Class List', hint: 'must be added classes with space' });

    public static create(): ConfigFrom {
        return new ConfigFrom();
    }
}
