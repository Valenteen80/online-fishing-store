import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCartButtonTitle: string = 'КОРЗИНА';
  public amountProductsAddedShoppingCart: number;

  constructor(
    private productService: ProductService
    ) {}

  ngOnInit(): void {
    this.productService.getProductsInShoppingCart().subscribe((products: Product[]) => {
      this.amountProductsAddedShoppingCart = products.length
    });
  }
}
