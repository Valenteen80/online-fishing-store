import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public personalDataButtonTitle: string = 'ЛИЧНЫЕ ДАННЫЕ';
  public favoritesProductsButtonTitle: string = 'ИЗБРАННЫЕ ТОВАРЫ';
  
  constructor() {}

  ngOnInit(): void {}
}
