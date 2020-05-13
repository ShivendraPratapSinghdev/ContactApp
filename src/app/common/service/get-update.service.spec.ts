import { TestBed } from '@angular/core/testing';

import { GetUpdateService } from './get-update.service';

describe('GetUpdateService', () => {
  let service: GetUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
