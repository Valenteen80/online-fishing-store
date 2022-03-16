import { ValuesSortButton } from '../enums/values-sort-button-enum';
import { SortButton } from '../interfaces/sort-button';

export const SORTBUTTONS: SortButton[] = [
  {
    label: ValuesSortButton.BY_RATING,
    value: ValuesSortButton.RATING,
    sort: ValuesSortButton.DESC,
    isActive: true,
  },
  {
    label: ValuesSortButton.BY_PRICE,
    value: ValuesSortButton.PRICE,
    sort: ValuesSortButton.ASC,
    isActive: false,
  },
];
