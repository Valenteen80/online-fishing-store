import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;

  constructor(
    public shoppingCartService:ShoppingCartService
    ) {}

  public productAltImgAttribute: string = 'photo';
  public shoppingCartButtonText: string = 'В КОРЗИНУ';

  public addShoppingCart(event: Event, product: Product): void {
    this.shoppingCartService.addShoppingCart(product)
    event.stopPropagation();
  }  

  ngOnInit(): void {}
}
