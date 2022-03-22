import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortButtonDirection } from 'src/app/enums/sort-button-direction-enum';
import { SortButtonValue } from 'src/app/enums/sort-button-value-enum';
import { SortButton } from 'src/app/interfaces/sort-button';

@Component({
  selector: 'app-sortPanel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
})
export class SortPanelComponent {
  @Input() public sortButtons: SortButton[];
  @Output() public sortEvent: EventEmitter<SortButton> =
    new EventEmitter<SortButton>();

  public selectedButton: SortButton = {} as SortButton;
  public sortButtonDirectionASC: string = SortButtonDirection.ASC;
  public sortButtonDirectionDESC: string = SortButtonDirection.DESC;

  public sort(selectedButton: SortButton): void {
    this.selectedButton = { ...selectedButton };

    selectedButton.sortDirection === SortButtonDirection.ASC
      ? (this.selectedButton.sortDirection = SortButtonDirection.DESC)
      : (this.selectedButton.sortDirection = SortButtonDirection.ASC);

    this.sortEvent.emit(this.selectedButton);
  }
}
