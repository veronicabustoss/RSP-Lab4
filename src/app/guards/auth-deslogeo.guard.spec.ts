import { TestBed } from '@angular/core/testing';

import { AuthDeslogeoGuard } from './auth-deslogeo.guard';

describe('AuthDeslogeoGuard', () => {
  let guard: AuthDeslogeoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDeslogeoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
