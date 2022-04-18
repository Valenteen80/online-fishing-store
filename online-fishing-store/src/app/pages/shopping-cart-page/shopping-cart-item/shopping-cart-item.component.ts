import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartProduct } from 'src/app/interfaces/shopping-cart-product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent  {
  @Input() public shoppingCartProduct: ShoppingCartProduct;
  @Output() public removeShoppingCartProduct: EventEmitter <ShoppingCartProduct> = new EventEmitter<ShoppingCartProduct>()
  @Output() public increaseAmountItem: EventEmitter <ShoppingCartProduct> = new EventEmitter<ShoppingCartProduct>()

  public productAltImgAttribute: string = 'photo';
  public quantity: number = 1;

  public addItemProduct(): void { 
    this.shoppingCartProduct.quantity = this.quantity;
    this.increaseAmountItem.emit(this.shoppingCartProduct);
  }

  public removeFromShoppingCart(): void {
    this.removeShoppingCartProduct.emit(this.shoppingCartProduct);
  }
}
