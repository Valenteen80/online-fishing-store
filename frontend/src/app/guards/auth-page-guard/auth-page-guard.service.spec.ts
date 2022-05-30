import { TestBed } from '@angular/core/testing';

import { AuthPageGuardService } from './auth-page-guard.service';

describe('AuthPageGuardService', () => {
  let service: AuthPageGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPageGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
