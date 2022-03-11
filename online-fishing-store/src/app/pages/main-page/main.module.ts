import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarMenuComponent } from './side-bar/sidebar-menu/sidebar-menu.component';
import { SidebarMenuItemComponent } from './side-bar/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainPageComponent,
    SideBarComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
  ],
  imports: [MainPageRoutingModule, CommonModule],
})
export class MainModule {}
