import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { UtilsService } from '../../services/utils.service';
import { OffcanvasFiveComponent } from '../../components/offcanvas/offcanvas-five/offcanvas-five.component';

@Component({
  selector: 'app-header-five',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasFiveComponent],
  templateUrl: './header-five.component.html',
  styleUrl: './header-five.component.scss'
})
export class HeaderFiveComponent {

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
