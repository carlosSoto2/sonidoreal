import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { UtilsService } from '../../services/utils.service';
import { OffcanvasSixComponent } from '../../components/offcanvas/offcanvas-six/offcanvas-six.component';

@Component({
  selector: 'app-header-seven',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasSixComponent],
  templateUrl: './header-seven.component.html',
  styleUrl: './header-seven.component.scss'
})
export class HeaderSevenComponent {

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
