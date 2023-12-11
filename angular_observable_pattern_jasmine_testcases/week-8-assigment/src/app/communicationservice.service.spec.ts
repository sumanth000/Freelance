import { TestBed } from '@angular/core/testing';

import { CommunicationserviceService } from './communicationservice.service';

describe('CommunicationserviceService', () => {
  let service: CommunicationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
