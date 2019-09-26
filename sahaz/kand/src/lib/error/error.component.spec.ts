import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzErrorComponent } from './error.component';

describe('SzErrorComponent', () => {
  let component: SzErrorComponent;
  let fixture: ComponentFixture<SzErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
