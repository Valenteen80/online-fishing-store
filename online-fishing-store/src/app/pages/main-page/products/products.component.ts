import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() public products: Product[];
  @Output() public selectProductEvent: EventEmitter <number> = new EventEmitter<number>();
  constructor() {}

  public onSelectProduct(product){
    this.selectProductEvent.emit(product.id);
  }

  ngOnInit(): void {}
}
