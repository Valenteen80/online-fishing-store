import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteName } from 'src/app/enums/route-name-enun';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent implements OnInit, OnDestroy {
  public favoriteProducts: Product[];
  private subscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFavoriteItems();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public removeFromFavorites(favoriteProduct: Product): void {
    favoriteProduct.isFavorite = false;
    this.productService.updateProduct(favoriteProduct);
    this.getFavoriteItems();
  }

  private getFavoriteItems(): void {
    this.subscription = this.productService.getFavoriteProducts().subscribe((products: Product[]) => {
      this.favoriteProducts = products;
    });
  }

  public redirectToDetailsPage(product:Product): void {
    this.router.navigate([`/${RouteName.PRODUCT_DETAILS}/${product.id}`]);
  }

}
