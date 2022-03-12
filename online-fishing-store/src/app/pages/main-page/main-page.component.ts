import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { PRODUCTS } from 'src/app/mocks/mock-products';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = CATEGORIES;
  public products: Product[] = PRODUCTS;

  constructor() {}

  ngOnInit(): void {}
}
