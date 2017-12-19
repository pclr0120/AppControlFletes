import { TestBed, inject } from '@angular/core/testing';

import { FireGPSService } from './fire-gps.service';

describe('FireGPSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireGPSService]
    });
  });

  it('should be created', inject([FireGPSService], (service: FireGPSService) => {
    expect(service).toBeTruthy();
  }));
});
