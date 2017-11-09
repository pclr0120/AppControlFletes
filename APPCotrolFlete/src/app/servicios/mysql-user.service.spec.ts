import { TestBed, inject } from '@angular/core/testing';

import { MysqlUserService } from './mysql-user.service';

describe('MysqlUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysqlUserService]
    });
  });

  it('should be created', inject([MysqlUserService], (service: MysqlUserService) => {
    expect(service).toBeTruthy();
  }));
});
