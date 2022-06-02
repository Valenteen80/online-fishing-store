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

  constructor() {}

  ngOnInit(): void {}
}
