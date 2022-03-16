import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortButton } from 'src/app/interfaces/sort-button';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
})
export class SortPanelComponent {
  @Input() public sortButtons: SortButton[];
  @Output() public onAdd: EventEmitter<SortButton[]> = new EventEmitter<
    SortButton[]
  >();

  public toggleSorting(selectedButton: SortButton): void {
    const newSortButtons = this.sortButtons.map((sortButton) => {
      const container = sortButton;
      container.isActive = !container.isActive;
      return container;
    });
    this.onAdd.emit(newSortButtons);
    console.log(this.sortButtons);
  }
}
