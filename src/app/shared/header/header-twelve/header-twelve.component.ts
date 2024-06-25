import { Component, HostListener,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { UtilsService } from '../../services/utils.service';
import { OffcanvasSixComponent } from '../../components/offcanvas/offcanvas-six/offcanvas-six.component';
import { SearchPopupComponent } from '../../components/search-popup/search-popup.component';
import { CartMiniSidebarComponent } from '../../components/offcanvas/cart-mini-sidebar/cart-mini-sidebar.component';

@Component({
  selector: 'app-header-twelve',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasSixComponent,SearchPopupComponent,CartMiniSidebarComponent],
  templateUrl: './header-twelve.component.html',
  styleUrl: './header-twelve.component.scss'
})
export class HeaderTwelveComponent {

  constructor(public utilsService:UtilsService) {};

  @Input () style_2 = false;

  public sticky: boolean = false;
  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
