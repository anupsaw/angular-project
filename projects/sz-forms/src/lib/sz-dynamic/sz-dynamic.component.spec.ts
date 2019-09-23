import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzDynamicComponent } from './sz-dynamic.component';

describe('SzDynamicComponent', () => {
  let component: SzDynamicComponent;
  let fixture: ComponentFixture<SzDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
