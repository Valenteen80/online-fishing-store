import { SortButtonDirection } from '../../enums/sort-button-direction-enum';
import { SortButtonLabel } from '../../enums/sort-button-label-enum';
import { SortButtonValue } from '../../enums/sort-button-value-enum';
import { SortButton } from '../../interfaces/sort-button';

export const SORTBUTTONS: SortButton[] = [
  {
    label: SortButtonLabel.BY_RATING,
    value: SortButtonValue.RATING,
    sortDirection: SortButtonDirection.DESC,
  },
  {
    label: SortButtonLabel.BY_PRICE,
    value: SortButtonValue.PRICE,
    sortDirection: SortButtonDirection.ASC,
  },
];
