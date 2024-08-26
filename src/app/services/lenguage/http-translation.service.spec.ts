import { TestBed } from '@angular/core/testing';

import { HttpTranslationService } from './http-translation.service';

describe('HttpTranslationService', () => {
  let service: HttpTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
