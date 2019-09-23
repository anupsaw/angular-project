import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMatExtComponent } from './ang-mat-ext.component';

describe('AngMatExtComponent', () => {
  let component: AngMatExtComponent;
  let fixture: ComponentFixture<AngMatExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMatExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMatExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
