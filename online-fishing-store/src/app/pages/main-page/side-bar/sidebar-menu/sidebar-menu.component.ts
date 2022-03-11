import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CATIGORIES } from 'src/app/mocks/mock-categories';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  public categories: Category[] = CATIGORIES;
  public category: Category;
}
