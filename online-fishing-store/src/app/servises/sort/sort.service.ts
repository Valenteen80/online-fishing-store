import { Injectable } from '@angular/core';
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
}

// setDefaultProducts(id = null): Product[] {
//   this.filteredProductByCategories = this.products.filter((product) => {
//     return product.idCategory === id;
//   });

//   return this.filteredProductByCategories.sort((a, b) => b.rating - a.rating);
// }

// public showDefaultProducts(): void {
//   this.filteredProducts = this.sortingServise.setDefaultProducts(1);
// }
