import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/enums/routs-name-enun';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCartProduct } from 'src/app/interfaces/shopping-cart-product';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  // public shoppingCartProducts: Product[];
  public totalAmount: number;
  public totalLabel: string = 'ОБЩАЯ СУММА';// сделать енам
  public orderButtonTitle: string = 'ОФОРМИТЬ ЗАКАЗ';// сделать енам

  public shoppingCartProducts: ShoppingCartProduct[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shoppingCartProducts =  [...this.shoppingCartService.getShoppingCartProducts()]
    this.getTotalAmount()
    console.log(this.shoppingCartProducts)
  }

  public removeFromShoppingCart(shoppingCartProduct: ShoppingCartProduct): void {
    this.shoppingCartService.removeFromShoppingCart(shoppingCartProduct)
    const index: number = this.shoppingCartProducts.findIndex((item) => item.id === shoppingCartProduct.id);
    this.shoppingCartProducts.splice(index, 1);
    this.getTotalAmount(); 
  }

  private getTotalAmount(): void {
    let totalAmount = 0;
    this.shoppingCartProducts.forEach((shoppingCartProduct: ShoppingCartProduct) => {
      totalAmount = totalAmount + shoppingCartProduct.price * shoppingCartProduct.quantity;
    });
    this.totalAmount = totalAmount;
  }

  public updateShoppingCartProducts(shoppingCartProduct: ShoppingCartProduct): void {
    this.shoppingCartService.updateShoppingCartProducts(shoppingCartProduct)
    this.getTotalAmount()
  }

  public navigateOrderPage(): void {
    this.router.navigate([`/${RoutesNames.ORDER}`])
  }
}
