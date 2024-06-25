import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileMenusComponent } from '../mobile-menus/mobile-menus.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-offcanvas-two',
  standalone: true,
  imports: [CommonModule, MobileMenusComponent],
  templateUrl: './offcanvas-two.component.html',
  styleUrl: './offcanvas-two.component.scss'
})
export class OffcanvasTwoComponent {

  constructor(public utilsService:UtilsService) {};

}
