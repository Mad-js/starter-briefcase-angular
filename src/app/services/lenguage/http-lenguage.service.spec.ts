import { TestBed } from '@angular/core/testing';

import { HttpLenguageService } from './http-lenguage.service';

describe('HttpLenguageService', () => {
  let service: HttpLenguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLenguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
