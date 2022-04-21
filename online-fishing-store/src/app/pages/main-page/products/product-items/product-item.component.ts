import { Component, Input, OnInit } from '@angular/core';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product;

  public productAltImgAttribute: string = 'photo';
  public shoppingCartButtonText: string = ButtonLabel.TO_SHOPPING_CART;

  constructor(
    private productService: ProductService,
    ) {}
    
  ngOnInit(): void {
    if(this.product.inShoppingCart) {
      this.shoppingCartButtonText = ButtonLabel.IN_SHOPPING_CART;
    }
  }

  public addShoppingCart(event: Event, product: Product): void {
    product.inShoppingCart = !product.inShoppingCart;
    this.productService.updateProduct(product);
    event.stopPropagation();
  }  
  
}
