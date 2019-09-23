import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzSoochiComponent } from './sz-soochi.component';

describe('SzSoochiComponent', () => {
  let component: SzSoochiComponent;
  let fixture: ComponentFixture<SzSoochiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzSoochiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzSoochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
