import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-favorite-products-item',
  templateUrl: './favorite-products-item.component.html',
  styleUrls: ['./favorite-products-item.component.scss']
})
export class FavoriteProductsItemComponent implements OnInit {
  @Input() public favoriteProduct: Product;
  @Output() public removedFavoriteProduct: EventEmitter <Product> = new EventEmitter<Product>();

  public productAltImgAttribute: string = 'photo';

  constructor() { }

  ngOnInit(): void {
  }

  public removeFromFavorites(): void {
    this.removedFavoriteProduct.emit(this.favoriteProduct);
  }
}
