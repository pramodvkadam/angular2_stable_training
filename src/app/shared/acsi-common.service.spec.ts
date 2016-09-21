/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcsiCommonService } from './acsi-common.service';

describe('Service: AcsiCommon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcsiCommonService]
    });
  });

  it('should ...', inject([AcsiCommonService], (service: AcsiCommonService) => {
    expect(service).toBeTruthy();
  }));
});
