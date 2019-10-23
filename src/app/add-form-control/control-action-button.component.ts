import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-control-actions',
    template: `
    <button mat-icon-button
        (click)="onAddClick()"
        value="Add Control"
        color="primary">
    <mat-icon>edit</mat-icon>
    </button>

    <button mat-icon-button
            (click)="onDeleteClick()"
            value="Add Control"
            color="primary">
        <mat-icon>delete</mat-icon>

    </button>

    <button mat-icon-button
    (click)="onCancelClick()"
    value="Add Control"
    color="primary">
<mat-icon>cancel</mat-icon>

</button>
    `,
    styles: [`
    :host {
        display: flex;
        justify-content: center;
        //position:absolute;
    }
    `]

})
export class ControlActionButtonComponent {

    constructor(private cd: ChangeDetectorRef) { }

    public refresh(): void {
        this.cd.detectChanges();
    }

    public onAddClick(): void {
        console.log('clicked');
    }

    public onDeleteClick(): void {

    }

    public onCancelClick(): void {

    }
}
