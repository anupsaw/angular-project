import { TestBed } from '@angular/core/testing';

import { SzSoochiService } from './sz-soochi.service';

describe('SzSoochiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SzSoochiService = TestBed.get(SzSoochiService);
    expect(service).toBeTruthy();
  });
});
