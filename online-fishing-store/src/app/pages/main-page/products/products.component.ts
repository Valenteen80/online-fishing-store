import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() public products: Product[];
  @Output() public selectedProduct: EventEmitter <Product> = new EventEmitter<Product>();
  constructor() {}

  public onSelectProduct(product: Product): void {
     this.selectedProduct.emit(product);
  }

  ngOnInit(): void {}
}
