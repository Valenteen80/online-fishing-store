import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RouteName } from 'src/app/enums/route-name-enun';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})

export class ShoppingCartPageComponent implements OnInit {
  public totalAmount: number;
  public orderButtonTitle: string = ButtonLabel.ORDER;

  public shoppingCartProducts: Product[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getShoppingCartProducts();
    this.getTotalAmount();
  }

  public getShoppingCartProducts(): void {
    this.shoppingCartService.getShoppingCartProducts().subscribe((shoppingCartProducts: Product[]) => {
      this.shoppingCartProducts = shoppingCartProducts;
    });
  }

  public removeFromShoppingCart(shoppingCartProduct: Product): void {
    this.shoppingCartService.removeFromShoppingCart(shoppingCartProduct);
    this.getTotalAmount(); 
  }

  private getTotalAmount(): void {
    let totalAmount = 0;
    this.shoppingCartProducts.forEach((shoppingCartProduct: Product) => {
      if (!shoppingCartProduct.quantity) {
        shoppingCartProduct.quantity = 1
      };
      totalAmount = totalAmount + shoppingCartProduct.price * shoppingCartProduct.quantity;
    });
    this.totalAmount = totalAmount;
  }

  public updateShoppingCartProducts(shoppingCartProduct: Product): void {
    this.shoppingCartService.updateShoppingCartProducts(shoppingCartProduct);
    this.getTotalAmount();
  }

  public redirectToOrderPage(): void {
    this.router.navigate([`/${RouteName.ORDER}`]);
  }
  
}
