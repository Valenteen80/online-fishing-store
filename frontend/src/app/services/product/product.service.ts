import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environments/environment';
import { SortService } from '../sort/sort.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productApi: string = environment.apiUrl;
  public products: Product[];
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(
    public sortServise: SortService,
    public http: HttpClient,
  ) {}

  public getProducts(): Observable<Product[]> {
    return  this.http.get<Product[]>(`${this.productApi}/products`)
    .pipe(
      map((products: Product[]) => {
        this.products = products;
        this.sortServise.sortByFavorites(products)
        this.products$.next(products);
        return this.products;
        }
      )
    );
  }

  public addProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.productApi}/products`, product);
  }

  public deleteProducts(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.productApi}/products ${product.id}`);
  }

  public changeProduct(product: Product): Observable<Product> {
    console.log(product)
    return this.http.put<Product>(`${this.productApi}/products`, product);
  }

  public updateProduct(product: Product): void {
    this.changeProduct(product).subscribe();
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
      );
  }
  
  public getFavoriteProducts():Observable<Product[]> {
    return this.products$
      .pipe(
        map((products: Product[]) =>  {
          return products.filter((product: Product) => product.isFavorite)
        })
      );
  }
}
