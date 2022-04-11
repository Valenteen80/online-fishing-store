import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;

  constructor(
    private productService: ProductService,
    ) {}
    
  ngOnInit(): void {}

  public productAltImgAttribute: string = 'photo';
  public shoppingCartButtonText: string = 'В КОРЗИНУ';

  public addShoppingCart(event: Event, product: Product): void {
    product.inShoppingCart = !product.inShoppingCart
    this.productService.updateProduct(product)
    event.stopPropagation();
  }  
}
