import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileMenusComponent } from '../mobile-menus/mobile-menus.component';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offcanvas-one',
  standalone: true,
  imports: [CommonModule,RouterModule,MobileMenusComponent],
  templateUrl: './offcanvas-one.component.html',
  styleUrl: './offcanvas-one.component.scss'
})
export class OffcanvasOneComponent {

  constructor(public utilsService:UtilsService) {};
}
