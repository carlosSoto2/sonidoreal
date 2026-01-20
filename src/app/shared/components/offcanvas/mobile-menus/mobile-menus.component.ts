import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import menu_data from '../../../data/menu-data';

@Component({
  selector: 'app-mobile-menus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-menus.component.html',
  styleUrl: './mobile-menus.component.scss'
})
export class MobileMenusComponent {
  public menu_data = menu_data;

  public navTitle = "";
  public subMenu = "";

  openMobileMenu(menu: string) {
    this.navTitle = this.navTitle === menu ? "" : menu;
  };

  openSubMobileMenu(s_menu: string) {
    this.subMenu = this.subMenu === s_menu ? "" : s_menu;
  };

}
