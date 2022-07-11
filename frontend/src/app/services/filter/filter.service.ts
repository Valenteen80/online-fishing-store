import { Injectable } from '@angular/core';
import { NameCategory } from 'src/app/enums/name-category-enum';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  public filterBySelectedCategory(category: Category, products: Product []): Product [] {

    return category.name === NameCategory.ALL_PRODUCTS
      ? products
      : products.filter((product) => product.category === category.name);
  }
  
}
