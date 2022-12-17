import { TestBed } from '@angular/core/testing';

import { ClaimFacadeService } from './claim-facade.service';

describe('ClaimFacadeService', () => {
  let service: ClaimFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
