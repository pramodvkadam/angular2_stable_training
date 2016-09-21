/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcsiAuthService } from './acsi-auth.service';

describe('Service: AcsiAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcsiAuthService]
    });
  });

  it('should ...', inject([AcsiAuthService], (service: AcsiAuthService) => {
    expect(service).toBeTruthy();
  }));
});
