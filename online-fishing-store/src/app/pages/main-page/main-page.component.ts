import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { SortButton } from 'src/app/interfaces/sort-button';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SORTBUTTONS } from 'src/app/pages/main-page/sortButton';
import { SortService } from 'src/app/servises/sort/sort.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = CATEGORIES;
  public products: Product[] = PRODUCTS;
  public sortButtons: SortButton[] = SORTBUTTONS;

  constructor(public sortServise: SortService) {}

  public sortProducts(sortButton: SortButton): void {
    const index: number = this.sortButtons.findIndex(
      (item: SortButton) => item.value === sortButton.value
    );

    this.sortButtons[index] = { ...sortButton };
  }

  public setDefaultProducts(): void {
    this.products = this.getDefaultProducts();
  }

  public getDefaultProducts(): Product[] {
    return this.sortServise.sortByDefault(this.products);
  }

  ngOnInit(): void {
    this.setDefaultProducts();
  }
}
