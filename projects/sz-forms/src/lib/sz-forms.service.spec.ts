import { TestBed } from '@angular/core/testing';

import { SzFormsService } from './sz-forms.service';

describe('SzFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SzFormsService = TestBed.get(SzFormsService);
    expect(service).toBeTruthy();
  });
});
