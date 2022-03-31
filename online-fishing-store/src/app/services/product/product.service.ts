import { Injectable, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SortService } from '../sort/sort.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
public products: Product[] = PRODUCTS;

  constructor(
    public sortServise: SortService,
  ) { }

  public getProducts():Observable<Product[]> {
    return of(this.products).pipe(map(products => this.sortServise.sortByFavorites(products)))
  }

  public getProductsById(id: number):Observable<Product> {
    return of(this.products.find((product) => {
      return product.id === id
    }))
  }

  public addFavorite(product: Product):void {
    const index: number = this.products.findIndex((item: Product) => item.name === product.name);
    this.products[index].isFavorite = !this.products[index].isFavorite
  }
}
