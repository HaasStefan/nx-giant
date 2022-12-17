import { TestBed } from '@angular/core/testing';

import { CustomerFacadeService } from './customer-facade.service';

describe('CustomerFacadeService', () => {
  let service: CustomerFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
