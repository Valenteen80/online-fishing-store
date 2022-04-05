import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SortService } from '../sort/sort.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  public products: Product[] = PRODUCTS;
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject <Product[]>(this.products);

  constructor(
    public sortServise: SortService,
  ) {}

  public getProducts() {
    return this.products$
  }

  public getProductsById(id: number):Observable<Product> {
    let eventProducts
    this.products$.subscribe((products:Product[]) => {
      eventProducts = [...products].find((product:Product) => {
        return product.id === id
      })
    })

    return of(eventProducts)
  }
  
  public updateProduct(product: Product) {
    let updatedProducts;
    this.products$.subscribe((products:Product[]) => {
      const index: number = products.findIndex((item: Product) => item.name === product.name);
      products[index] = { ...product };
      updatedProducts = products
    })
    this.products$.next(updatedProducts)
  }

  public getProductsInShoppingCart():Observable<Product[]> {
    return this.products$
      .pipe(
        map((products: Product[]) =>  {
          return products.filter((product: Product) => product.inShoppingCart)
        })
      )
  }
}
