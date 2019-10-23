import {
  Component, OnInit, ViewEncapsulation,
  HostBinding, Input, ViewContainerRef, ViewChild
} from '@angular/core';
import { SzFormGroup, SzDirectionType } from '@sahaz/kand';

@Component({
  selector: 'sz-control-group',
  template: '<ng-template #formContent></ng-template>',
  styles: [`
    sz-control-group.sz-control-group {
      .sz-flex-row {
        display: flex;
        justify-content: center;
        width: 100%
      }

      .sz-flex-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    }
  .
  `],
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'sz-control-group' },
  encapsulation: ViewEncapsulation.None,
})
export class SzControlGroupComponent implements OnInit, SzFormGroup {

  public element: string;
  public id: string;
  public index: number;
  @ViewChild('formContent', { read: ViewContainerRef, static: false }) public container: ViewContainerRef;

  @Input() public flexDirection: SzDirectionType;

  @HostBinding('class') public get flexDirectionClass(): string {
    return this.flexDirection === 'row' ? 'sz-flex-row' : 'sz-flex-column';
  }
  constructor() { }

  public ngOnInit(): void {
  }

}
