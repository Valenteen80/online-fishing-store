import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCartProduct } from 'src/app/interfaces/shopping-cart-product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public products: Product[] = [] as Product[];
  public shoppingCartProducts: ShoppingCartProduct[]

  constructor(
    private productService: ProductService
  ) { }

  public getShoppingCartProducts(): ShoppingCartProduct[] {   
    this.productService.getProductsInShoppingCart().subscribe((products: Product[]) => {
      this.products = products
    });
    let shoppingCartProducts = []
    this.products.map((item) => {
      shoppingCartProducts.push({
        id: item.id,
        name: item.name,
        img: item.img,
        description: item.description,
        price: item.price,
        quantity: 1,
      })
    })
    this.shoppingCartProducts = shoppingCartProducts
    return this.shoppingCartProducts
  }

  public removeFromShoppingCart(shoppingCartProduct: ShoppingCartProduct): void {
    let product = this.products.find(item => item.id === shoppingCartProduct.id);
    product.inShoppingCart = false
    this.productService.updateProduct(product);
  }

  public updateShoppingCartProducts(quantity: ShoppingCartProduct): void {
    let shoppingCartProducts = []
    this.shoppingCartProducts.map((item) => {

      if (item.id === quantity.id) {
        item.quantity = quantity.quantity
        shoppingCartProducts.push(item)
      } else {
        shoppingCartProducts.push(item)
      }
    })

    this.shoppingCartProducts = shoppingCartProducts
  }


  

}


