import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/enums/routs-name-enun';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent implements OnInit {
  public favoriteProducts: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFavoriteItems()
  }

  public removeFromFavorites(favoriteProduct: Product): void {
    favoriteProduct.isFavorite = false;
    this.productService.updateProduct(favoriteProduct);
    this.getFavoriteItems();
  }

  private getFavoriteItems(): void {
    this.productService.getFavoriteProducts().subscribe((products: Product[]) => {
      this.favoriteProducts = products;
    });
  }

  public redirectToDetailsPage(product:Product): void {
    this.router.navigate([`/${RoutesNames.PRODUCT_DETAILS}/${product.id}`])
  }

}
