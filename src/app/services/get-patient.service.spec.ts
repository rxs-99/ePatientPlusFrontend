import { TestBed } from '@angular/core/testing';

import { GetPatientService } from './get-patient.service';

describe('GetPatientService', () => {
  let service: GetPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
