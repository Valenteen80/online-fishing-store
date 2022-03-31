import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';
import { switchMap } from 'rxjs/operators'; 
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';
@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  public product: Product;
  public productAltImgAttribute: string = 'photo';
  public shoppingCartButtonText: string = 'В КОРЗИНУ';
  public favoritesButtonText: string = 'В ИЗБРАННОЕ';

  constructor(
    private route: ActivatedRoute,
    private productServise: ProductService,
    private shoppingCartService: ShoppingCartService,
    private favoriteService: FavoriteService
  ) {}

  public addShoppingCart(product: Product): void {
    this.shoppingCartService.addShoppingCart(product)
  }

  public addFavorite(product): void {
    this.favoriteService.addFavorite(product)
    this.productServise.addFavorite(product)
  }
  
  ngOnInit(): void {
        this.route.params.pipe(switchMap((params: Params) => {
          return this.productServise.getProductsById(+params['id']) 
          }))
          .subscribe((product:Product) => this.product = product)
  }
}