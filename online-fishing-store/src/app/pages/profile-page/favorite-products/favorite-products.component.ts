import { Component, OnChanges, OnInit } from '@angular/core';
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
    private productService: ProductService
  ) { }

  public removeFromFavorites(favoriteProduct): void {
    favoriteProduct.isFavorite = !favoriteProduct.isFavorite
    this.productService.updateProduct(favoriteProduct)
    this.getFavoriteItems()
  }

  private getFavoriteItems(): void {
    this.productService.getIsFavoriteProducts().subscribe((products: Product[]) => {
      this.favoriteProducts = products;
    });
  }

  ngOnInit(): void {
    this.getFavoriteItems()
  }
}
