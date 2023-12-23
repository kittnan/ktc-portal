import { TestBed } from '@angular/core/testing';

import { HttpSloganService } from './http-slogan.service';

describe('HttpSloganService', () => {
  let service: HttpSloganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSloganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
