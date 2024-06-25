import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { RouterModule } from '@angular/router';
import { OffcanvasTwoComponent } from '../../components/offcanvas/offcanvas-two/offcanvas-two.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header-two',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasTwoComponent],
  templateUrl: './header-two.component.html',
  styleUrl: './header-two.component.scss'
})
export class HeaderTwoComponent {

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
