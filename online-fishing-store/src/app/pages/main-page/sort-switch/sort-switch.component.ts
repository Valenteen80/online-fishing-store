import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-switch',
  templateUrl: './sort-switch.component.html',
  styleUrls: ['./sort-switch.component.scss'],
})
export class SortSwitchComponent implements OnInit {
  public raitingButtonTitle: string = 'ПО РЕЙТИНГУ ⇧';
  public priceButtonTitle: string = 'ПО ЦЕНЕ ⇩';
  public isSortByPrice: boolean = true;

  constructor() {}

  public toggleSorting(state: boolean): void {
    this.isSortByPrice = state;
  }

  ngOnInit(): void {}
}
