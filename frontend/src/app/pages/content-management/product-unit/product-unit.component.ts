import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.scss']
})
export class ProductUnitComponent {
  public productAltImgAttribute: string = 'photo';
  public removeProductButtonText: string = ButtonLabel.REMOVE_PRODUCT;
  public changeProductButtonText: string = ButtonLabel.CHANGE_PRODUCT;
  public saveChangesButtonText: string = ButtonLabel.SAVE_CHANGES;
  public isChangeProduct: Boolean = false;

  @Input() public product: Product;
  @Output() public deleteProduct: EventEmitter <Product> = new EventEmitter<Product>();

  constructor(
    public productService: ProductService,
  ) { }

  public changeProduct(): void {
    this.isChangeProduct = true;
  }

  public updateProduct(product: Product): void {
    this.productService.changeProduct(product)
      .subscribe(() => this.isChangeProduct = false);
  }

  public removeProduct(product: Product): void {
    this.deleteProduct.emit(product);
    this.removeProductButtonText = ButtonLabel.REMOVED_PRODUCT;
  }
}
