import { Injectable } from '@angular/core';
import { SortButtonDirection } from 'src/app/enums/sort-button-direction-enum';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}

  public sortByDefault(products): Product[] {
    return products.filter((product) => {
      return product.categoryId === 1;
    });
  }

  public sortBySelectCategory(
    categoryId: number,
    products: Product[]
  ): Product[] {
    return categoryId === 6
      ? products
      : products.filter((product) => {
          return product.categoryId === categoryId;
        });
  }

  public sortByRaiting(sortDirection: string, products: Product[]): Product[] {
    return sortDirection === SortButtonDirection.ASC
      ? products.sort((a, b) => {
          return a.rating - b.rating;
        })
      : products.sort((a, b) => {
          return b.rating - a.rating;
        });
  }

  public sortByPrice(sortDirection, products: Product[]): Product[] {
    return sortDirection === SortButtonDirection.ASC
      ? products.sort((a, b) => {
          return a.price - b.price;
        })
      : products.sort((a, b) => {
          return b.price - a.price;
        });
  }
}
