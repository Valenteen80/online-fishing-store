import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';
import { switchMap } from 'rxjs/operators'; 

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
    private productService: ProductService,
  ) {}

  public addShoppingCart(product: Product): void {
    product.inShoppingCart = !product.inShoppingCart
    this.productService.updateProduct(product) 
  }

  public addFavorite(product): void {
    product.isFavorite = !product.isFavorite
    this.productService.updateProduct(product)    
  }
  
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.productService.getProductsById(+params['id']) 
    })).subscribe((product:Product) => this.product = product)
  }
  
}