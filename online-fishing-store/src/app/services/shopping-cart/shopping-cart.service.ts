import { Injectable, } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
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

  public removeFromShoppingCart(shoppingCartProduct: ShoppingCartProduct): Observable<Product> {
    return this.productService.getProductsInShoppingCart()
    .pipe(
      map((data: Product[]) => {
        console.log(data)
        console.log(shoppingCartProduct)
        const product: Product = data.find((item) => item.id === shoppingCartProduct.id);
        product.inShoppingCart = false;
        this.productService.updateProduct(product);

        return product;
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
