import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environments/environment';
import { SortService } from '../sort/sort.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productApi: string = environment.productApiUrl;
  public products: Product[] = [];
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(
    public sortServise: SortService,
    public http: HttpClient
  ) {}
  
  public addProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productApi, product);
  }

  public deleteProducts(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.productApi} ${product.id}`);
  }

  public changeProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.productApi, product);
  }

  public getProductsFromServer(): Observable<Product[]> {
    return  this.http.get<Product[]>(this.productApi)
    .pipe(
      map((products: Product[]) => {
        this.products = products;
        this.products$.next(products);
        return this.products;
        }
      )
    )
  }

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
