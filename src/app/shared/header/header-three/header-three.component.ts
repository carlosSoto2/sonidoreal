import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { RouterModule } from '@angular/router';
import { OffcanvasThreeComponent } from '../../components/offcanvas/offcanvas-three/offcanvas-three.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header-three',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasThreeComponent],
  templateUrl: './header-three.component.html',
  styleUrl: './header-three.component.scss'
})
export class HeaderThreeComponent {

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
