import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { RoutesNames } from 'src/app/enums/routs-name-enun';
import { ShoppingCartProduct } from 'src/app/interfaces/shopping-cart-product';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})

export class ShoppingCartPageComponent implements OnInit {
  public totalAmount: number;
  public orderButtonTitle: string = ButtonLabel.CHECKOUT;

  public shoppingCartProducts: ShoppingCartProduct[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getShoppingCartProducts()
    this.getTotalAmount();
  }

  public getShoppingCartProducts(): void {
    this.shoppingCartService.getShoppingCartProducts().subscribe((shoppingCartProducts: ShoppingCartProduct[]) => {
      console.log(shoppingCartProducts)
      this.shoppingCartProducts = shoppingCartProducts;
    })
    
  }

  public removeFromShoppingCart(shoppingCartProduct: ShoppingCartProduct): void {
    this.shoppingCartService.removeFromShoppingCart(shoppingCartProduct)
      .pipe(take(1)).subscribe((resp) => {
      console.log(resp)
    });
    // this.getShoppingCartProducts() //после вызова этого метода тут продукты корзины обновятся и поле quantity станет = 1 !!!
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
    this.getTotalAmount();
  }

  public navigateOrderPage(): void {
    this.router.navigate([`/${RoutesNames.ORDER}`])
  }
}
