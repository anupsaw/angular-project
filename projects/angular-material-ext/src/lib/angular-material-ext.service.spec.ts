import { TestBed } from '@angular/core/testing';

import { AngularMaterialExtService } from './angular-material-ext.service';

describe('AngularMaterialExtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularMaterialExtService = TestBed.get(AngularMaterialExtService);
    expect(service).toBeTruthy();
  });
});
