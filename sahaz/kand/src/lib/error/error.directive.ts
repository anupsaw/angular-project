import { Directive, Input, AfterViewInit, OnDestroy, Inject, QueryList } from '@angular/core';
import { SzControlError, SZ_ERROR_MESSAGE_REGISTRY } from './error-message.registry';
import { SzErrorComponent } from './error.component';
import { NgControl, FormControl, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { SzBaseComponent } from '../abstract/base-component.abstract';
import { SzBaseFormControl } from '../abstract/base-form-control.abstract';
import { distinctUntilChanged } from 'rxjs/internal/operators';

@Directive({
  selector: '[szError]'
})
export class SzErrorDirective extends SzBaseComponent implements AfterViewInit, OnDestroy {

  @Input() public errorsConfig: SzControlError[];
  @Input() public szError: QueryList<SzErrorComponent>;

  private control: SzBaseFormControl;
  public hasFocus: boolean;
  constructor(
    private readonly ngControl: NgControl,
    private readonly errorStateMatcher: ErrorStateMatcher,
    @Inject(SZ_ERROR_MESSAGE_REGISTRY) private readonly registeredErrorList: SzControlError[],
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.includeSzErrorTemplate();
    this.subscribeControlEvents();
  }
  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  // tslint:disable-next-line: variable-name
  private updateErrorStatus(_status?: string): void {
    this.matchErrorAndUpdateMessage();
  }

  public includeSzErrorTemplate(): void {

    this.errorsConfig = this.errorsConfig || [];
    this.szError.forEach((item: SzErrorComponent) => {
      if (item instanceof SzErrorComponent) {
        this.errorsConfig.unshift(SzControlError.create(item.type, item.message, item.priority || 1));
        item.destroy();
      }
    });
    this.szError.reset([]);
    this.control = this.ngControl.valueAccessor as SzBaseFormControl;
  }

  private matchErrorAndUpdateMessage(): void {
    let error: SzControlError = null;
    const formControl = this.ngControl ? this.ngControl.control as FormControl : null;
    const parent = formControl ? formControl.parent as unknown as FormGroupDirective : null;
    const hasError = this.ngControl.errors && this.errorStateMatcher.isErrorState(formControl, parent);

    if (hasError) {
      for (const err in this.ngControl.errors) {
        if (err) {
          error = this.getMatchedError(err, error);
        }
      }
    }

    this.updateErrorMessage(error);
  }

  private updateErrorMessage(error: SzControlError): void {
    if (error) {
      const controlName = this.control.label || this.control.placeholder || this.control.formControlName;
      const requiredValue = this.getRequiredValue(error);
      this.control.errorMessage = this.formatString(error.message, controlName, requiredValue);
    } else {
      this.control.errorMessage = '';
    }
  }

  private subscribeControlEvents(): void {

    this.subscription = this.control.focusChanges
      .subscribe((hasFocus: boolean) => {
        this.hasFocus = hasFocus;
        hasFocus ? this.markControlAsUntouched() : this.updateErrorStatus();
      });

    this.subscription = this.ngControl.statusChanges.pipe(
      distinctUntilChanged()
    ).subscribe((status: string) => this.updateErrorStatus(status));
  }

  private getMatchedError(type: string, error: SzControlError): SzControlError {

    const errorList = [...this.errorsConfig, ...this.registeredErrorList].sort((a, b) => b.priority - a.priority);
    for (const item of errorList) {
      if (item.type === type) {
        if (!error || (error && item.priority > error.priority)) {
          error = item;
        }
        break;
      }
    }
    return error;
  }

  private markControlAsUntouched(): void {
    this.ngControl && this.ngControl.control && this.ngControl.control.pristine && this.ngControl.control.markAsUntouched();
  }

  getRequiredValue(error: any): any {
    return error && error.requiredLength || error.requiredValue || null;
  }

  private formatString(str: string, ...args: string[]): string {
    args.forEach((item: string, index: number) => {
      const regex = new RegExp(`\\{[${index}]\\}`);
      str = str.replace(regex, item);
    });
    return str;
  }

}
