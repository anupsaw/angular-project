import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatErrorExtComponent } from './mat-error-ext.component';

describe('MatErrorExtComponent', () => {
  let component: MatErrorExtComponent;
  let fixture: ComponentFixture<MatErrorExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatErrorExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatErrorExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
