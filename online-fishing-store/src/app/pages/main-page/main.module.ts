import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarMenuComponent } from './side-bar/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './side-bar/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-items/product-item.component';
import { SortPanelComponent } from './sort-panel/sort-panel.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SideBarComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    ProductsComponent,
    ProductItemComponent,
    SortPanelComponent,
  ],
  imports: [MainPageRoutingModule, SharedModule],
})
export class MainModule {}
