import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { ProductDetailsPageComponent } from '../pages/product-details-page/product-details-page.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  // { path: 'mainpage', component: MainPageComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
      },
      {
        path: 'main-page',
        component: MainPageComponent,
      },
      // {
      //   path: '/product-details',
      //   component: ProductDetailsPageComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}

// {
//   path: '',
//   component: MainLayoutComponent,
//   children: [
//     { path: '', redirectTo: '/' },
//     { path: '', component: MainPageComponent },
//   ],
// },
