import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public productAddedShoppingCart$: Subject<Product> = new BehaviorSubject <Product>({} as Product);

  constructor() { }

  public addShoppingCart(product): void {
    this.productAddedShoppingCart$.next(product);
  }
}

