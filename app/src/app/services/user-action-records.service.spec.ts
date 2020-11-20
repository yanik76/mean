import { TestBed } from '@angular/core/testing';

import { UserActionRecordsService } from './user-action-records.service';

describe('UserActionRecordsService', () => {
  let service: UserActionRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserActionRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
