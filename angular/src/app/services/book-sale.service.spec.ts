import { TestBed } from '@angular/core/testing';

import { BookSaleService } from './book-sale.service';

describe('BookSaleService', () => {
  let service: BookSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
