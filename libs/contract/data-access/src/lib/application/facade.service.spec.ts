import { TestBed } from '@angular/core/testing';

import { FacadeService } from './facade.service';

describe('FacadeService', () => {
  let service: FacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
