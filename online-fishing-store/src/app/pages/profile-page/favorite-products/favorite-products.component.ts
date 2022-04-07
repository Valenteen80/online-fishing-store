import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.productService.getProductsIsFavorite().subscribe((products: Product[]) => {
      this.favoriteProducts = products;
      console.log(this.favoriteProducts);
    });
  }

}
