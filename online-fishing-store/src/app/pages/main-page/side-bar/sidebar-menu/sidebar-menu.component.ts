import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  @Input() categories: Category[];
}
