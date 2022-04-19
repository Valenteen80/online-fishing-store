import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent  {
  public product: Product;

  @Input() public set shoppingCartProduct(item: Product) {
    if (!item) return;

    this.product = {
      ...item,
      quantity: item.quantity && item.quantity >= 1 ? item.quantity : 1,
    };
  }

  @Output() public removeShoppingCartProduct: EventEmitter <Product> = new EventEmitter<Product>()
  @Output() public increaseAmountItem: EventEmitter <Product> = new EventEmitter<Product>()

  public productAltImgAttribute: string = 'photo';

  public addItemProduct(quantity: number): void {
    this.product.quantity = quantity;
    this.increaseAmountItem.emit(this.product);
  }

  public removeFromShoppingCart(): void {
    this.removeShoppingCartProduct.emit(this.product);
  }
}
