import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss'],
})
export class SidebarMenuItemComponent {
  @Input() public category: Category;
}
