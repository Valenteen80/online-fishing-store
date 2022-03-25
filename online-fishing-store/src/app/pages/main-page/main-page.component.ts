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
  public sortButtons: SortButton[] = SORTBUTTONS;

  constructor(public sortServise: SortService) {}

  public sortProducts(sortButton: SortButton): void {
    const index: number = this.sortButtons.findIndex((item: SortButton) => item.value === sortButton.value);
    this.sortButtons[index] = { ...sortButton };

    this.products =
      sortButton.value === SortButtonValue.RATING
        ? this.sortServise.sortByRaiting(sortButton.sortDirection,this.products)
        : this.sortServise.sortByPrice(sortButton.sortDirection, this.products);
  }

  ngOnInit(): void {
    this.products = this.sortServise.sortingByFavorites(this.products);
  }
}
