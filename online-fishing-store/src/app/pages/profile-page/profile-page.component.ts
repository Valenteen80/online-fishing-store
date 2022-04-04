import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesNames } from 'src/app/enums/routs-name-enun';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public personalDataButtonTitle: string = 'ЛИЧНЫЕ ДАННЫЕ';
  public favoriteProductsButtonTitle: string = 'ИЗБРАННЫЕ ТОВАРЫ';
  
  constructor(
    private router: Router
  ) {}

  public goToPersonalData():void {
    // console.log(`/${RoutesNames.PERSONAL_DATA}`)
    // this.router.navigate([`/personal-data`])
  }

  public goToFavoriteProducts(): void {

  }

  ngOnInit(): void {}
}
