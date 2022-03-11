import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent implements OnInit {
  @Input() public product: Product;

  public productButtonText: string = 'В КОРЗИНУ';

  constructor() {}

  ngOnInit(): void {}
}
