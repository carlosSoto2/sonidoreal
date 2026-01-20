import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { UtilsService } from '../../services/utils.service';
import { OffcanvasFiveComponent } from '../../components/offcanvas/offcanvas-five/offcanvas-five.component';
import { SearchPopupComponent } from '../../components/search-popup/search-popup.component';

@Component({
  selector: 'app-header-ten',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasFiveComponent,SearchPopupComponent],
  templateUrl: './header-ten.component.html',
  styleUrl: './header-ten.component.scss'
})
export class HeaderTenComponent {

  constructor(public utilsService:UtilsService) {};
}
