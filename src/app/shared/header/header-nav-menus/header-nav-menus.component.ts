import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import menu_data from '../../data/menu-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-nav-menus',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header-nav-menus.component.html',
  styleUrl: './header-nav-menus.component.scss'
})
export class HeaderNavMenusComponent {
  public menu_items = menu_data;
}
