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

  public nameSelectedCategory: string;

  public onSelectCategory(category: Category): void {
    this.nameSelectedCategory = category.name;
    this.selectCategoryEvent.emit(category);
  }
}
