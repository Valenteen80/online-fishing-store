import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  public onSelectProduct(product): void {
    this.router.navigate([`/product-details/${product.id}`])
    this.selectedProduct.emit(product.id);
  }

  ngOnInit(): void {}
}
