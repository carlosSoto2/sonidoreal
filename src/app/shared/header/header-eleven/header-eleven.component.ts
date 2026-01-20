import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { OffcanvasSixComponent } from '../../components/offcanvas/offcanvas-six/offcanvas-six.component';
import { UtilsService } from '../../services/utils.service';
import { SearchPopupComponent } from '../../components/search-popup/search-popup.component';

@Component({
  selector: 'app-header-eleven',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasSixComponent,SearchPopupComponent],
  templateUrl: './header-eleven.component.html',
  styleUrl: './header-eleven.component.scss'
})
export class HeaderElevenComponent {

  constructor(public utilsService:UtilsService) {};

  public sticky: boolean = false;
  public openLang: boolean = false;

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  handleOpenLang() {
    this.openLang = !this.openLang
  }
}
