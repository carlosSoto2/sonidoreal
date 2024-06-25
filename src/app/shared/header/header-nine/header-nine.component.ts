import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { UtilsService } from '../../services/utils.service';
import { OffcanvasOneComponent } from '../../components/offcanvas/offcanvas-one/offcanvas-one.component';
import { SearchPopupComponent } from '../../components/search-popup/search-popup.component';

@Component({
  selector: 'app-header-nine',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasOneComponent,SearchPopupComponent],
  templateUrl: './header-nine.component.html',
  styleUrl: './header-nine.component.scss'
})
export class HeaderNineComponent {

  constructor(public utilsService:UtilsService) {};

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
