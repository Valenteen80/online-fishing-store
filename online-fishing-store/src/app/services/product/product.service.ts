import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of} from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SortService } from '../sort/sort.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  public products: Product[] = PRODUCTS;
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.products);

  constructor(
    public sortServise: SortService,
  ) {}

  public getProducts(): Observable<Product[]>{
    return of(this.products).pipe(map(products => this.sortServise.sortByFavorites(products)))
  }

  public getProductsById(id: number): Observable<Product> {
    return this.products$
      .pipe(
        map((products: Product[]) => {
          return products.find((product: Product) => product.id === id )
        })
      )
  }

  public updateProduct(product: Product): void {
    const index: number = this.products.findIndex((item: Product) => item.name === product.name);
    this.products[index] = { ...product };
    this.products$.next(this.products);
  }

  public getProductsInShoppingCart(): Observable<Product[]> {
    return this.products$
      .pipe(
        map((products: Product[]) =>  {
          return products.filter((product: Product) => product.inShoppingCart)
        })
      )
  }
  
  public getFavoriteProducts():Observable<Product[]> {
    return this.products$
      .pipe(
        map((products: Product[]) =>  {
          return products.filter((product: Product) => product.isFavorite)
        })
      )
    }
}
