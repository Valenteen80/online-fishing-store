import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  @Input() public categories: Category[];
  @Output() public selectCategoryEvent: EventEmitter<Category> = new EventEmitter<Category>();

  public selectedCategory: Category = {} as Category;

  public onSelectCategory(category: Category): void {
    this.selectedCategory = category;
    this.selectCategoryEvent.emit(category);
  }
}
