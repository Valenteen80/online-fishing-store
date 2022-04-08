import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  // @Input() public favoriteProduct: Product;
  // @Output() public selectedFavoriteProduct: EventEmitter <Product> = new EventEmitter<Product>();

  // public productAltImgAttribute: string = 'photo';

  // constructor() { }

  // public removeFromFavorites(favoriteProduct): void {
  //   this.selectedFavoriteProduct.emit(favoriteProduct);
  // }


  ngOnInit(): void {
  }

}
