import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  @Input() public categories: Category[];
  @Output() public selectCategoryEvent: EventEmitter<Category> =
    new EventEmitter<Category>();

  public idSelectedCategory: number;

  public transferSelectCategory(category: Category): void {
    this.idSelectedCategory = category.id;
    this.selectCategoryEvent.emit(category);
  }
}
