import { TestBed } from '@angular/core/testing';

import { InstallationManagerServicesService } from './installation-manager-services.service';

describe('InstallationManagerServicesService', () => {
  let service: InstallationManagerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallationManagerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
