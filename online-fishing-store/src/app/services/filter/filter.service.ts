import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  public filterByDefault(products):Product [] {
    return products.filter((product) => {
      return product.categoryId === 1;
    })
  }
}