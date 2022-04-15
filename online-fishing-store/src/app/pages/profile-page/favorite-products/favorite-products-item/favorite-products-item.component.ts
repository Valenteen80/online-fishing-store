import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-favorite-products-item',
  templateUrl: './favorite-products-item.component.html',
  styleUrls: ['./favorite-products-item.component.scss']
})
export class FavoriteProductsItemComponent {
  @Input() public favoriteProduct: Product;
  @Output() public removeFavoriteProduct: EventEmitter <Product> = new EventEmitter<Product>();

  public productAltImgAttribute: string = 'photo';


  public removeFromFavorites(): void {
    this.removeFavoriteProduct.emit(this.favoriteProduct);
  }
}
