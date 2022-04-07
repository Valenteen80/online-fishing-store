import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-favorite-products-item',
  templateUrl: './favorite-products-item.component.html',
  styleUrls: ['./favorite-products-item.component.scss']
})
export class FavoriteProductsItemComponent implements OnInit {
  @Input() public favoriteProduct: Product;

  public productAltImgAttribute: string = 'photo';

  constructor() { }

  public removeFromFavorites(favoriteProduct): void {
    console.log(favoriteProduct)
  }

  ngOnInit(): void {
  }

}
