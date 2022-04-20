import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';
import { switchMap } from 'rxjs/operators'; 
import { ButtonLabel } from 'src/app/enums/button-label-enum';

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
    this.getProductById()
    if(this.product.inShoppingCart) {
      this.shoppingCartButtonText = ButtonLabel.IN_SHOPPING_CART;
    }

    if(this.product.isFavorite) {
      this.favoritesButtonText = ButtonLabel.ADDED_TO_FAVORITES;
    }
  }

  public addShoppingCart(product: Product): void {
    product.inShoppingCart = true;
    this.productService.updateProduct(product); 
    this.getProductById();
    this.shoppingCartButtonText = ButtonLabel.IN_SHOPPING_CART;
  }

  public addFavorite(product): void {
    product.isFavorite = !product.isFavorite;
    this.productService.updateProduct(product); 
    this.favoritesButtonText = ButtonLabel.ADDED_TO_FAVORITES ;
  }

  private getProductById(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.productService.getProductsById(+params['id']) 
      ))
      .subscribe((product:Product) => this.product = product);
  }
  
}
