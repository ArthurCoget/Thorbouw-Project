import { TestBed } from '@angular/core/testing';

import { CarouselAlternativeRotationService } from './carousel-alternative-rotation-service';

describe('CarouselAlternativeRotationService', () => {
  let service: CarouselAlternativeRotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselAlternativeRotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
