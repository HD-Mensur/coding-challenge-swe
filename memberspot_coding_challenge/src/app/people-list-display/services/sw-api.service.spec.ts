import { TestBed } from '@angular/core/testing';

import { SwApiService } from './sw-api.service';

describe('SwApiService', () => {
  let service: SwApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
