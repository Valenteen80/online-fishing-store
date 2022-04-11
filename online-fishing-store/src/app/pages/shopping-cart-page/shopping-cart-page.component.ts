import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  public shoppingCartProducts: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getShoppingCartItems()
    console.log(this.shoppingCartProducts)
  }

  private getShoppingCartItems(): void {

    this.productService.getProductsInShoppingCart().subscribe((products: Product[]) => {
      this.shoppingCartProducts = products;
    });
  }

}
