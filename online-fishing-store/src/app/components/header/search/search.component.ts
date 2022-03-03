import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public search: string = '';
  public placeholderValue: string = 'поиск по товарам';

  streamSearch$: Subject<string> = new Subject<string>();

  constructor() {}

  public filterByProdukt(): void {
    // this.sortingServise.streamSearch$.next(this.search);
  }

  ngOnInit(): void {}
}
