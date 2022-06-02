import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteName } from 'src/app/enums/route-name-enum';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public shoppingCartButtonTitle: string = ButtonLabel.SHOPPING_CART;
  public amountProductsAddedShoppingCart: number;
  private subscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.subscription = this.productService.getProductsInShoppingCart().subscribe((products: Product[]) => {
      this.amountProductsAddedShoppingCart = products.length;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public redirectToShoppingCartPage(): void {
    this.router.navigate([`/${RouteName.SHOPPING_CART}`]);
  }

}
