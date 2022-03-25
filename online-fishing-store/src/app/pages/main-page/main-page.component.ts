import { Component, OnInit } from '@angular/core';
import { SortButtonValue } from 'src/app/enums/sort-button-value-enum';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { SortButton } from 'src/app/interfaces/sort-button';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { PRODUCTS } from 'src/app/mocks/mock-products';
import { SORTBUTTONS } from 'src/app/pages/main-page/sortButton';
import { FilterService } from 'src/app/services/filter/filter.service';
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

  constructor(
    public filterServise: FilterService,
    public sortServise: SortService
    ) {}

  public setDefaultProducts(): void {
    this.products = this.getDefaultProducts();
  }

  public getDefaultProducts(): Product[] {
    return this.filterServise.filterByDefault(this.products);
  }

  public sortProducts(sortButton: SortButton): void {
    const index: number = this.sortButtons.findIndex((item: SortButton) => item.value === sortButton.value);
    this.sortButtons[index] = { ...sortButton };

    this.products =
      sortButton.value === SortButtonValue.RATING
        ? this.sortServise.sortByRaiting(sortButton.sortDirection,this.products)
        : this.sortServise.sortByPrice(sortButton.sortDirection, this.products);
  }



  ngOnInit(): void {
    this.setDefaultProducts();
    this.products = this.sortServise.sortByFavorites(this.products);
  }
}