import { TestBed } from '@angular/core/testing';

import { Ser1Service } from './ser1.service';

describe('Ser1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ser1Service = TestBed.get(Ser1Service);
    expect(service).toBeTruthy();
  });
});
