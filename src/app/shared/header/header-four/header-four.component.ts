import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { RouterModule } from '@angular/router';
import { OffcanvasFourComponent } from '../../components/offcanvas/offcanvas-four/offcanvas-four.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header-four',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasFourComponent],
  templateUrl: './header-four.component.html',
  styleUrl: './header-four.component.scss'
})
export class HeaderFourComponent {

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
