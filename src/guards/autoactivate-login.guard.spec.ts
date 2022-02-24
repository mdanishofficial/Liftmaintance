import { TestBed } from '@angular/core/testing';

import { AutoactivateLoginGuard } from './autoactivate-login.guard';

describe('AutoactivateLoginGuard', () => {
  let guard: AutoactivateLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutoactivateLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
