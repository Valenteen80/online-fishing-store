import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public saveProductButtonText: string = ButtonLabel.SAVE_CHANGES;
  public newProduct: Product = {
    category: '',
    name: 'name',
    img: 'https://img2.freepng.ru/20180621/gjg/kisspng-business-click-ecommerce-web-agency-service-plas-no-photo-5b2c46587cca02.9930178315296282485112.jpg',
    description:'description',
    price: 0,
  };

  @Output() public createProduct: EventEmitter <Product> = new EventEmitter<Product>();

  constructor(
    public productService: ProductService,
  ) { }

  public saveProduct(): void {
    this.createProduct.emit(this.newProduct);
  }
}
