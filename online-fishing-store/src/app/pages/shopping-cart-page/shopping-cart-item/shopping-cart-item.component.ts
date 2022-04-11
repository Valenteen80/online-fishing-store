import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() public shoppingCartProduct: Product;
  @Output() public removedShoppingCartProduct: EventEmitter <Product> = new EventEmitter<Product>()
  public productAltImgAttribute: string = 'photo';

  constructor() { }

  ngOnInit(): void {}

  public removeFromShoppingCart(): void {
    this.removedShoppingCartProduct.emit(this.shoppingCartProduct);
  }
}


