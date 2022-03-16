import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
})
export class SortPanelComponent {
  public ratingButtonTitle: string = 'ПО РЕЙТИНГУ ⇧';
  public priceButtonTitle: string = 'ПО ЦЕНЕ ⇩';
  public isSortByPrice: boolean = false;

  public toggleSorting(state: boolean): void {
    this.isSortByPrice = state;
  }
}
