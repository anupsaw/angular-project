import { TestBed } from '@angular/core/testing';

import { SzInputService } from './sz-input.service';

describe('SzInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SzInputService = TestBed.get(SzInputService);
    expect(service).toBeTruthy();
  });
});
