import { TestBed, inject } from '@angular/core/testing';

import { MysqlVehiculoService } from './mysql-vehiculo.service';

describe('MysqlVehiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysqlVehiculoService]
    });
  });

  it('should be created', inject([MysqlVehiculoService], (service: MysqlVehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
