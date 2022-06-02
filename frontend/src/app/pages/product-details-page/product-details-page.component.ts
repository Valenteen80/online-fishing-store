import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service'; 
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { DataProduct } from 'src/app/interfaces/data-product';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  public product: Product;
  public productAltImgAttribute: string = 'photo';
  public shoppingCartButtonText: string = ButtonLabel.TO_SHOPPING_CART;
  public favoritesButtonText: string = ButtonLabel.FAVORITES;

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
    this.route.data.subscribe((data: DataProduct) => this.product = data.product);
  }
}
