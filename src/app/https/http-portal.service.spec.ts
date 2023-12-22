import { TestBed } from '@angular/core/testing';

import { HttpPortalService } from './http-portal.service';

describe('HttpPortalService', () => {
  let service: HttpPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
