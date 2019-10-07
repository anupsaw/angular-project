import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormControlComponent } from './add-form-control.component';

describe('AddFormControlComponent', () => {
  let component: AddFormControlComponent;
  let fixture: ComponentFixture<AddFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
