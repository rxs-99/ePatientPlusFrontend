import { TestBed } from '@angular/core/testing';

import { ResponseBubbleService } from './response-bubble.service';

describe('ResponseBubbleService', () => {
  let service: ResponseBubbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseBubbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
