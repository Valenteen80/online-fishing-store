import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';
import { switchMap } from 'rxjs/operators'; 
import { ButtonLabelToShoppingCartAndFavorites } from 'src/app/enums/button-label-to-shopping-cart-and-favorites';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  public product: Product;
  public productAltImgAttribute: string = 'photo';
  public shoppingCartButtonText: string = ButtonLabelToShoppingCartAndFavorites.SHOPPING_CART;
  public favoritesButtonText: string = ButtonLabelToShoppingCartAndFavorites.FAVORITES;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getProductsById()
  }

  public addShoppingCart(product: Product): void {
    product.inShoppingCart = !product.inShoppingCart
    this.productService.updateProduct(product) 
    this.getProductsById()
  }

  public addFavorite(product): void {
    product.isFavorite = !product.isFavorite
    this.productService.updateProduct(product)    
  }

  private getProductsById(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.productService.getProductsById(+params['id']) 
      })).subscribe((product:Product) => this.product = product)
  }
}
