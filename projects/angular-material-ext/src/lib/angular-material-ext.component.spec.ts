import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialExtComponent } from './angular-material-ext.component';

describe('AngularMaterialExtComponent', () => {
  let component: AngularMaterialExtComponent;
  let fixture: ComponentFixture<AngularMaterialExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
