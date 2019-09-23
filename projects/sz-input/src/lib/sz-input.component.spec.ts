import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzInputComponent } from './sz-input.component';

describe('SzInputComponent', () => {
  let component: SzInputComponent;
  let fixture: ComponentFixture<SzInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
