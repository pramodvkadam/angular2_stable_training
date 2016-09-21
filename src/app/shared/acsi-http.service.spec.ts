/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcsiHttpService } from './acsi-http.service';

describe('Service: AcsiHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcsiHttpService]
    });
  });

  it('should ...', inject([AcsiHttpService], (service: AcsiHttpService) => {
    expect(service).toBeTruthy();
  }));
});
