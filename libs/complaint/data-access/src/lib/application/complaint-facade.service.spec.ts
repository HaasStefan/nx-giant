import { TestBed } from '@angular/core/testing';

import { ComplaintFacadeService } from './complaint-facade.service';

describe('ComplaintFacadeService', () => {
  let service: ComplaintFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
