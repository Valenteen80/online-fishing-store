import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public productAddedFavorite$: Subject<Product> = new BehaviorSubject <Product>({} as Product);

  constructor() { }

  public addFavorite(product):void {
    this.productAddedFavorite$.next(product);
  }

}
