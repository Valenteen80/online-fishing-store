import { Injectable, } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public products: Product[] = [] as Product[];
  public shoppingCartProducts: Product[];


  constructor(
    private productService: ProductService
  ) { }

  public getShoppingCartProducts(): Observable<Product[]> {  
    return this.productService.getProductsInShoppingCart()
      .pipe(
        map((items: Product[]) => {
          return items.map((item: Product) => ({ ...item, quantity: item.quantity }));
        })
      );
  }

  public removeFromShoppingCart(shoppingCartProduct: Product): void {
    shoppingCartProduct.inShoppingCart = false;
    this.productService.updateProduct(shoppingCartProduct);
  }

  public updateShoppingCartProducts(shoppingCartProduct: Product): void {
    this.productService.updateProduct(shoppingCartProduct);
  }
}
