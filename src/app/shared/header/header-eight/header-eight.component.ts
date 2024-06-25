import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { OffcanvasTwoComponent } from '../../components/offcanvas/offcanvas-two/offcanvas-two.component';

@Component({
  selector: 'app-header-eight',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasTwoComponent],
  templateUrl: './header-eight.component.html',
  styleUrl: './header-eight.component.scss'
})
export class HeaderEightComponent {

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
