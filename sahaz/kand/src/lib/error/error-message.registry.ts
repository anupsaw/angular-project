import { InjectionToken } from '@angular/core';

export const SZ_ERROR_MESSAGE_REGISTRY = new InjectionToken<SzControlError>('mat-error-message-registry-token');

export class SzControlError {
    type: string;
    message: string;
    priority: number;
    value?: any;

    public static create(type: string, message: string, priority?: number, value?: any): SzControlError {
        const error = new SzControlError();
        error.type = type;
        error.message = message;
        error.priority = priority || 0;
        error.value = value;
        return error;
    }
}

export const matCommonErrorMessagesProvider = [
    {
        provide: SZ_ERROR_MESSAGE_REGISTRY,
        useValue: SzControlError.create('required', '{0} is required'),
        multi: true
    },
    {
        provide: SZ_ERROR_MESSAGE_REGISTRY,
        useValue: SzControlError.create('minlength', '{0} must have at least {1} characters'),
        multi: true
    },
    {
        provide: SZ_ERROR_MESSAGE_REGISTRY,
        useValue: SzControlError.create('maxlength', '{0} must have at max {1} characters'),
        multi: true
    },
    {
        provide: SZ_ERROR_MESSAGE_REGISTRY,
        useValue: SzControlError.create('email', '{0} is not valid.'),
        multi: true
    }
];

export function formatString(str: string, ...args: string[]): string {
    args.forEach((item: string, index: number) => {
        const regex = new RegExp(`\\{[${index}]}`);
        str = str.replace(regex, item);

    });
    return str;
}
