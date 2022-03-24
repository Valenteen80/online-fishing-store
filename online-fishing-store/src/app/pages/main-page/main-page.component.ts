import { Component, OnInit } from '@angular/core';
import { SortButtonValue } from 'src/app/enums/sort-button-value-enum';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { SortButton } from 'src/app/interfaces/sort-button';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SORTBUTTONS } from 'src/app/pages/main-page/sortButton';
import { SortService } from 'src/app/services/sort/sort.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = CATEGORIES;
  public products: Product[] = PRODUCTS;
  public sortedProducts: Product[];
  public sortButtons: SortButton[] = SORTBUTTONS;
  public idSelectedCategory: number;

  constructor(public sortServise: SortService) {}

  public sortProducts(sortButton: SortButton): void {
    const index: number = this.sortButtons.findIndex(
      (item: SortButton) => item.value === sortButton.value
    );

    this.sortButtons[index] = { ...sortButton };

    this.sortedProducts =
      sortButton.value === SortButtonValue.RATING
        ? this.sortServise.sortByRaiting(
            sortButton.sortDirection,
            this.sortedProducts
          )
        : this.sortServise.sortByPrice(
            sortButton.sortDirection,
            this.sortedProducts
          );
  }

  public setDefaultProducts(): void {
    this.sortedProducts = this.getDefaultProducts();
  }

  public getDefaultProducts(): Product[] {
    return this.sortServise.sortByDefault(this.products);
  }

  public onSelectCategory(category: Category): void {
    this.sortedProducts = this.sortServise.sortBySelectCategory(
      category.id,
      this.products
    );
  }

  ngOnInit(): void {
    this.setDefaultProducts();
  }
}
