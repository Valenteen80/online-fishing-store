import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { PRODUCTS } from 'src/app/mocks/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
public products: Product[] = PRODUCTS;

  constructor() { }

  public getProducts():Observable<Product[]> {
    return of (this.products);
  }

  public getProductsById(id):Observable<Product> {
    return of (this.products.find((product) => {
      return product.id === id
    }))
  }
}

