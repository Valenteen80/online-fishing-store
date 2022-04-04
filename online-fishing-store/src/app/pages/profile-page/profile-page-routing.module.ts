import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page.component';
import { RoutesNames } from 'src/app/enums/routs-name-enun';

const routes: Routes = [
  {
    path:"", component: ProfilePageComponent,
    children: [
      {
        path: '',
        redirectTo: RoutesNames.PERSONAL_DATA,
        pathMatch: 'full',
      },
      {
        path: RoutesNames.PERSONAL_DATA,
        loadChildren: () =>
          import('../../pages/profile-page/personal-data/personal-data.module').then(
            (m) => m.PersonalDataModule
          ),
      },
      {
        path: RoutesNames.FAVORITE_PRODUCTS,
        loadChildren: () =>
          import('../../pages/profile-page/favorite-products/favorite-products.module').then(
            (m) => m.FavoriteProductsModule
          ),
      },
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule { }
