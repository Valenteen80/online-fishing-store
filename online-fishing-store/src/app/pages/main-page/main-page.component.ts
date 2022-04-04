import { Component, OnInit } from '@angular/core';
import { SortButtonValue } from 'src/app/enums/sort-button-value-enum';
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
  public selectedProduct: Product;

  constructor(
    public filterServise: FilterService,
    public sortServise: SortService,
    public productService: ProductService
    ) {}

  public getProducts(): void{
     this.productService.products$.subscribe((products:Product[]) => {
        this.products = this.sortServise.sortByFavorites(products);
        this.іnitialProducts = products;
        this.sortServise.sortByFavorites(products)
      })
  }

  public getProductById(id: number): void {
    this.productService.getProductsById(id).subscribe((product) => {
      this.selectedProduct = product
    })
  }

  public onSelectCategory(category: Category): void {
    this.products = this.filterServise.filterBySelectedCategory(category, this.іnitialProducts);
    this.selectedButton = {} as SortButton;
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
    this.getProducts()
  }
}