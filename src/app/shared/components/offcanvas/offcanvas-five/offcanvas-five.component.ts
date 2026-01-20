import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileMenusComponent } from '../mobile-menus/mobile-menus.component';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offcanvas-five',
  standalone: true,
  imports: [CommonModule,RouterModule,MobileMenusComponent],
  templateUrl: './offcanvas-five.component.html',
  styleUrl: './offcanvas-five.component.scss'
})
export class OffcanvasFiveComponent {

  constructor(public utilsService:UtilsService) {};
}
