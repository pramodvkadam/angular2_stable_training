/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcsiGuardService } from './acsi-guard.service';

describe('Service: AcsiGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcsiGuardService]
    });
  });

  it('should ...', inject([AcsiGuardService], (service: AcsiGuardService) => {
    expect(service).toBeTruthy();
  }));
});
