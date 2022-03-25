import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() public categories: Category[];
  @Output() public selectCategoryEvent: EventEmitter<Category> = new EventEmitter<Category>();

  public onSelectCategory(category: Category): void {
    this.selectCategoryEvent.emit(category);
  }
}
