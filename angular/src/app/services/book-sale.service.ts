import { Injectable } from '@angular/core';
import { bookOrderModel } from '../model/book-order.model';


@Injectable({
  providedIn: 'root'
})
export class BookSaleService {
  bookOrdersPerYear: bookOrderModel[] = [
    { orderYear: 2016, fantasyScienceFiPerYearCount: 10, romancePerYearCount:24, mysteryOrCrimePerYearCount: 20,generalPerYearCount:32,westernPerYearCount:18,literaturePerYearCount:5 },
    { orderYear: 2017, fantasyScienceFiPerYearCount: 16, romancePerYearCount:22, mysteryOrCrimePerYearCount: 23,generalPerYearCount:30,westernPerYearCount:16,literaturePerYearCount:9 },
    { orderYear: 2018, fantasyScienceFiPerYearCount: 28, romancePerYearCount:19, mysteryOrCrimePerYearCount: 29,generalPerYearCount:30,westernPerYearCount:12,literaturePerYearCount:13 },
  ]
  constructor() { }

  getAll(){
    return this.bookOrdersPerYear;
  }
}
