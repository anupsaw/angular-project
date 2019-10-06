import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFormUiComponent } from './config-form-ui.component';

describe('ConfigFormUiComponent', () => {
  let component: ConfigFormUiComponent;
  let fixture: ComponentFixture<ConfigFormUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFormUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
