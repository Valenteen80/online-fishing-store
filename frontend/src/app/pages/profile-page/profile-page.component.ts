import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonLabel } from 'src/app/enums/button-label-enum';
import { ButtonValue } from 'src/app/enums/button-value-enum';
import { RouteName } from 'src/app/enums/route-name-enum';
import { Tab } from 'src/app/interfaces/tab';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  
  public tabs: Tab []  = [
    {
      value: ButtonValue.PERSONAL_DATA,
      label: ButtonLabel.PERSONAL_DATA,
      link: `/${RouteName.PROFILE}/${RouteName.PERSONAL_DATA}`
    },                                                                    
    {
      value: ButtonValue.FAVORITE_PRODUCTS,
      label: ButtonLabel.FAVORITE_PRODUCTS,
      link: `/${RouteName.PROFILE}/${RouteName.FAVORITE_PRODUCTS}`,
    }
  ];
  
  constructor(
    private router: Router
  ) {}

  public redirectToSelectedTab(tab: Tab):void {
    this.router.navigate([tab.link])
  }

  ngOnInit(): void {}
}
