import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() public products: Product[];
  @Output() public selectedProduct: EventEmitter <number> = new EventEmitter<number>();
  constructor(
    // private pouter: Router
  ) {}

  public onSelectProduct(product){
    this.selectedProduct.emit(product.id);
    // this.pouter.navigate(['/product-details'])

  }

  ngOnInit(): void {}
}
