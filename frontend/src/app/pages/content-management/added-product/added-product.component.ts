import { Component, OnInit } from '@angular/core';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-added-product',
  templateUrl: './added-product.component.html',
  styleUrls: ['./added-product.component.scss']
})
export class AddedProductComponent {
  public addingProductButtonText: string = ButtonLabel.ADD_PRODUCT;
  public saveProductButtonText: string = ButtonLabel.SAVE_CHANGES;
  public isAddProduct: Boolean = false;
  public newProduct: Product = {
    id: 0,
    categoryId: 0,
    name: 'name',
    img: 'img',
    description:'description',
    price: 0,
    rating: 0,
    isFavorite: false,
    inShoppingCart: false,
  };

  constructor(
    public productService: ProductService,
  ) { }

  public addProduct():void {
    this.isAddProduct = true;
  }

  public saveProduct(): void {
    this.productService.addProducts(this.newProduct)
      .subscribe((response) => {
        this.isAddProduct = false;
        location.reload();
      });
  }
}
