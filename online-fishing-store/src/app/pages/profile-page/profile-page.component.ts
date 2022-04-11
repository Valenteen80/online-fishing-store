import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileTabLabel } from 'src/app/enums/profile-tab-label-enum';
import { ProfileTabValue } from 'src/app/enums/profile-tab-value-enum';
import { RoutesNames } from 'src/app/enums/routs-name-enun';
import { Tab } from 'src/app/interfaces/tab';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public personalDataButtonTitle: string = 'ЛИЧНЫЕ ДАННЫЕ';
  public favoriteProductsButtonTitle: string = 'ИЗБРАННЫЕ ТОВАРЫ';
  public tabs: Tab []  = [
    {
      value: ProfileTabValue.PERSONAL_DATA,
      label: ProfileTabLabel.PERSONAL_DATA,
      link: `/${RoutesNames.PROFILE}/${RoutesNames.PERSONAL_DATA}`
    },                                                                    
    {
      value: ProfileTabValue.FAVORITE_PRODUCTS,
      label: ProfileTabLabel.FAVORITE_PRODUCTS,
      link: `/${RoutesNames.PROFILE}/${RoutesNames.FAVORITE_PRODUCTS}`,
    }
  ];
  
  constructor(
    private router: Router
  ) {}

  public navigateToSelectedTab(tab: Tab):void {
    this.router.navigate([tab.link])
  }

  ngOnInit(): void {}
}
