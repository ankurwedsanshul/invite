import { TestBed, inject } from '@angular/core/testing';

import { ScrollServiceService } from './scroll-service.service';

describe('ScrollServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollServiceService]
    });
  });

  it('should be created', inject([ScrollServiceService], (service: ScrollServiceService) => {
    expect(service).toBeTruthy();
  }));
});
