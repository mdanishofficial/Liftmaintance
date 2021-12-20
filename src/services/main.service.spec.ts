import { TestBed } from '@angular/core/testing';

import { InstallationService } from './main.service';

describe('InstallationService', () => {
  let service: InstallationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
