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
    private productServise: ProductService
  ) {}

  public addShoppingCart(): void {}

  ngOnInit(): void {
      this.route.params.pipe(switchMap((params: Params) => this.productServise.getProductsById(+params['id'])))
        .subscribe(product => this.product = product);
  }
}

