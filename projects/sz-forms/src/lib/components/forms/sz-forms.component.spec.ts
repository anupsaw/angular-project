import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzFormsComponent } from './sz-forms.component';

describe('SzFormsComponent', () => {
  let component: SzFormsComponent;
  let fixture: ComponentFixture<SzFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
