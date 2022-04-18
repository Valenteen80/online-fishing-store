import { Injectable, } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCartProduct } from 'src/app/interfaces/shopping-cart-product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public products: Product[] = [] as Product[];
  public shoppingCartProducts: ShoppingCartProduct[];

  constructor(
    private productService: ProductService
  ) { }

  public getShoppingCartProducts(): Observable<ShoppingCartProduct[]> {  
    return this.productService.getProductsInShoppingCart()
      .pipe(
        map((data: Product[]) => {
          return data.map((item: Product) => {
            return {
              id: item.id,
              name: item.name,
              img: item.img,
              description: item.description,
              price: item.price,
              quantity: 1,
            }
          });
        })
      )
  }

//Код зацикливается:
  public removeFromShoppingCart(shoppingCartProduct: ShoppingCartProduct): Observable<Product[]> {
    return this.productService.getProductsInShoppingCart()
    .pipe(
      map((data: Product[]) => {
        return data.map((item: Product ) => {
          if (item.id === shoppingCartProduct.id) {
            item.inShoppingCart = false;
            console.log(item);
            this.productService.updateProduct(item);
          }
          return item;
        })
      })
    )
  }

  public updateShoppingCartProducts(shoppingCartProduct: ShoppingCartProduct): void {
    let shoppingCartProducts = [];
    this.shoppingCartProducts.map((item) => {

      if (item.id === shoppingCartProduct.id) {
        item.quantity = shoppingCartProduct.quantity
        shoppingCartProducts.push(item)
      } else {
        shoppingCartProducts.push(item)
      }
    });

    this.shoppingCartProducts = shoppingCartProducts;
  }


}
