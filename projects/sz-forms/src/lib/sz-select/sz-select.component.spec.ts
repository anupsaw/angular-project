import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzSelectComponent } from './sz-select.component';

describe('SzSelectComponent', () => {
  let component: SzSelectComponent;
  let fixture: ComponentFixture<SzSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
