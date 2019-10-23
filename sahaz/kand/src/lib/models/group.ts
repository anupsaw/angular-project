export type SzDirectionType = 'row' | 'column';

export class SzFormGroup {

    private static groupCounter = 0;
    public element = 'group';
    public id = `sz-form-group-dynamic-${SzFormGroup.groupCounter++}`;
    public formGroupName?: string;
    public flexDirection: SzDirectionType;
    public index: number;

    private constructor(
        obj: Partial<SzFormGroup> = {},
    ) {
        for (const key in obj) {
            if (key && obj[key] !== 'function') {
                this[key] = obj[key];
            }
        }

    }

    public static create(
        formGroupName?: string,
        flexDirection: SzDirectionType = 'column',
        index = 1
    ): SzFormGroup {
        return new SzFormGroup({ formGroupName, flexDirection, index });
    }
}
