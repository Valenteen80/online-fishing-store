import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCartProduct } from 'src/app/interfaces/shopping-cart-product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() public shoppingCartProduct: ShoppingCartProduct;
  @Output() public removeShoppingCartProduct: EventEmitter <ShoppingCartProduct> = new EventEmitter<ShoppingCartProduct>()
  @Output() public addItem: EventEmitter <ShoppingCartProduct> = new EventEmitter<ShoppingCartProduct>()

  public productAltImgAttribute: string = 'photo';
  public quantity: number = 1;

  constructor() { }

  ngOnInit(): void {}

  public addItemProduct(): void { 
    let productQuantity = {...this.shoppingCartProduct}
    productQuantity.quantity = this.quantity
    this.shoppingCartProduct.quantity = this.quantity
    this.addItem.emit(productQuantity);
  }

  public removeFromShoppingCart(): void {
    this.removeShoppingCartProduct.emit(this.shoppingCartProduct);
  }
}


