import { InjectionToken, ValueProvider } from '@angular/core';

export const MAT_ERROR_MESSAGE_REGISTRY = new InjectionToken<MatControlError>('mat-error-message-registry-token');

export class MatControlError {
    type: string;
    message: string;
    priority: number;

    public static create(type: string, message: string, priority?: number): MatControlError {
        const error = new MatControlError();
        error.type = type;
        error.message = message;
        error.priority = priority || 0;
        return error;
    }

    public static messageRegistryProvider(type: string, message: string, priority?: number): ValueProvider {

        return {
            provide: MAT_ERROR_MESSAGE_REGISTRY,
            useValue: MatControlError.create(type, message, priority),
            multi: true
        };

    }
}

export const matCommonErrorMessagesProvider = [
    {
        provide: MAT_ERROR_MESSAGE_REGISTRY,
        useValue: MatControlError.create('required', '{0} is required'),
        multi: true
    },
    {
        provide: MAT_ERROR_MESSAGE_REGISTRY,
        useValue: MatControlError.create('minlength', '{0} must have at least {1} characters'),
        multi: true
    },
    {
        provide: MAT_ERROR_MESSAGE_REGISTRY,
        useValue: MatControlError.create('maxlength', '{0} must have at max {1} characters'),
        multi: true
    },
    {
        provide: MAT_ERROR_MESSAGE_REGISTRY,
        useValue: MatControlError.create('email', '{0} is not valid.'),
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
