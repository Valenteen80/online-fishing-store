import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SortService } from '../sort/sort.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  public products: Product[] = PRODUCTS;
  public products$: Subject<Product[]> = new BehaviorSubject <Product[]>(this.products);
  public amountProductsAddedShoppingCart$: Subject<number> = new BehaviorSubject <number>(0);

  constructor(
    public sortServise: SortService,
  ) { }

  public getProductsById(id: number):Observable<Product> {
    let eventProducts
    this.products$.subscribe((products:Product[]) => {
      eventProducts = [...products]
    })

    return of(eventProducts.find((product) => {
      return product.id === id
    }))
  }
  
  public updateProduct(product: Product):void {
    this.products$.subscribe((products:Product[]) => {
      const index: number = products.findIndex((item: Product) => item.name === product.name);
      products[index] = { ...product };
    })
    
    this.countProductsShoppingCart()
  }

  public countProductsShoppingCart(): void {
    let count: number = 0;

    this.products$.subscribe((products:Product[]) => {
      products.forEach((item) => {

        if (item.inShoppingCart) {
          count = count + 1
        }
      });
      this.amountProductsAddedShoppingCart$.next(count)
    })

  }
}
