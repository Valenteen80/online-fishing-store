import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortButtonDirection } from 'src/app/enums/sort-button-direction-enum';
import { SortButtonLabel } from 'src/app/enums/sort-button-label-enum';
import { SortButtonValue } from 'src/app/enums/sort-button-value-enum';
import { SortButton } from 'src/app/interfaces/sort-button';

@Component({
  selector: 'app-sortPanel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
})
export class SortPanelComponent {
  @Input() public sortButtons: SortButton[];
  @Output() public sorting: EventEmitter<SortButton> =
    new EventEmitter<SortButton>();

  public isSortByPriceASC: boolean = true;
  public selectedButton: string = SortButtonValue.RATING;

  public sort(selectedButton: SortButton): void {
    let newSortButton = { ...selectedButton };
    this.selectedButton = selectedButton.value;

    if (selectedButton.value === SortButtonValue.PRICE) {
      this.isSortByPriceASC = !this.isSortByPriceASC;

      if (!this.isSortByPriceASC) {
        newSortButton.label = SortButtonLabel.BY_PRICE_DESC;
        newSortButton.sortDirection = SortButtonDirection.DESC;
      } else {
        newSortButton.label = SortButtonLabel.BY_PRICE_ASC;
        newSortButton.sortDirection = SortButtonDirection.ASC;
      }
    }
    this.sorting.emit(newSortButton);
  }
}
