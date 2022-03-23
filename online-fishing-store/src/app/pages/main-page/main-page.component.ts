import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { SortButton } from 'src/app/interfaces/sort-button';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SORTBUTTONS } from 'src/app/pages/main-page/sortButton';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = CATEGORIES;
  public products: Product[] = PRODUCTS;
  public sortButtons: SortButton[] = SORTBUTTONS;

  constructor() {}

  public sortProducts(sortButton: SortButton): void {
    const index: number = this.sortButtons.findIndex(
      (item: SortButton) => item.value === sortButton.value
    );

    this.sortButtons[index] = { ...sortButton };
  }

  ngOnInit(): void {}
}
