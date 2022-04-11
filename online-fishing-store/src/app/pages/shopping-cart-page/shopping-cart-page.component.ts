import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  public shoppingCartProducts: Product[];
  public totalAmount: number= 0;
  public totalLabel: string = 'ОБЩАЯ СУММА'

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getShoppingCartItems()
    this.getTotalAmount()
  }

  public removeFromShoppingCart(shoppingCartProduct: Product): void {
    shoppingCartProduct.inShoppingCart = !shoppingCartProduct.inShoppingCart;
    this.productService.updateProduct(shoppingCartProduct);
    this.getShoppingCartItems();
    this.totalAmount = 0;
    this.getTotalAmount();
  }

  private getShoppingCartItems(): void {
    this.productService.getProductsInShoppingCart().subscribe((products: Product[]) => {
      this.shoppingCartProducts = products;
    });
  }

  private getTotalAmount(): void{
    this.shoppingCartProducts.forEach((product: Product) => {
      this.totalAmount = this.totalAmount + product.price;
    });
  }
}

