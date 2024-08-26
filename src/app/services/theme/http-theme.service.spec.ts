import { TestBed } from '@angular/core/testing';

import { HttpThemeService } from './http-theme.service';

describe('HttpThemeService', () => {
  let service: HttpThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
