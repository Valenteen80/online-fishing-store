import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';
import { switchMap } from 'rxjs/operators'; 
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {

  public product: Product;
  public productAltImgAttribute: string = 'photo';
  public shoppingCartButtonText: string = ButtonLabel.TO_SHOPPING_CART;
  public favoritesButtonText: string = ButtonLabel.FAVORITES;
  private subscribe: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getProductById();
    
    if(this.product.inShoppingCart) {
      this.shoppingCartButtonText = ButtonLabel.IN_SHOPPING_CART;
    }

    if(this.product.isFavorite) {
      this.favoritesButtonText = ButtonLabel.ADDED_TO_FAVORITES;
    }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  public addShoppingCart(product: Product): void {
    product.inShoppingCart = !product.inShoppingCart;
    this.productService.updateProduct(product); 
    this.product = {...product};

    this.shoppingCartButtonText = product.inShoppingCart
      ? ButtonLabel.IN_SHOPPING_CART
      : ButtonLabel.TO_SHOPPING_CART;
  }

  public addFavorite(product): void {
    product.isFavorite = !product.isFavorite;
    this.productService.updateProduct(product);

    this.favoritesButtonText = product.isFavorite
      ? ButtonLabel.ADDED_TO_FAVORITES
      : ButtonLabel.FAVORITES;
  }

  private getProductById(): void {
    this.subscribe = this.route.params
      .pipe(
        switchMap((params: Params) => this.productService.getProductsById(+params['id']) 
      ))
      .subscribe((product:Product) => this.product = product);
  }
  
}
