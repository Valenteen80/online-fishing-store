import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteName } from 'src/app/enums/route-name-enum';
import { ButtonValue } from 'src/app/enums/button-value-enum';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { SortButton } from 'src/app/interfaces/sort-button';
import { CATEGORIES } from 'src/app/mocks/mock-categories';
import { SORTBUTTONS } from 'src/app/pages/main-page/sortButton';
import { FilterService } from 'src/app/services/filter/filter.service';
import { ProductService } from 'src/app/services/product/product.service';
import { SortService } from 'src/app/services/sort/sort.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = CATEGORIES;
  public products: Product[];
  public sortButtons: SortButton[] = SORTBUTTONS;
  public selectedButton: SortButton = {} as SortButton; 
  public іnitialProducts: Product[];

  constructor(
    public filterService: FilterService,
    public sortService: SortService,
    public productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void {
      this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe((products:Product[]) => {
        this.products = products;
        this.іnitialProducts = products;
      })
  }

  public redirectToSelectedProduct(product:Product): void {
      this.router.navigate([`/${RouteName.PRODUCT_DETAILS}/${product.id}`]);
  }

  public onSelectCategory(category: Category): void {
    this.products = this.filterService.filterBySelectedCategory(category, this.іnitialProducts);
    this.selectedButton = {} as SortButton;
  }

  public sortProducts(sortButton: SortButton): void {
    const index: number = this.sortButtons.findIndex((item: SortButton) => item.value === sortButton.value);
    this.sortButtons[index] = { ...sortButton };

    this.products =
      sortButton.value === ButtonValue.RATING
        ? this.sortService.sortByRating(sortButton.sortDirection, this.products)
        : this.sortService.sortByPrice(sortButton.sortDirection, this.products);
  }
  
}
