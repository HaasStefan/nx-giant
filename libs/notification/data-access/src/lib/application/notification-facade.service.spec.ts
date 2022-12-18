import { TestBed } from '@angular/core/testing';

import { NotificationFacadeService } from './notification-facade.service';

describe('NotificationFacadeService', () => {
  let service: NotificationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
