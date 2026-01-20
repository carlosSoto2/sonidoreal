import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileMenusComponent } from '../mobile-menus/mobile-menus.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-offcanvas-three',
  standalone: true,
  imports: [CommonModule,MobileMenusComponent],
  templateUrl: './offcanvas-three.component.html',
  styleUrl: './offcanvas-three.component.scss'
})
export class OffcanvasThreeComponent {

  constructor(public utilsService:UtilsService) {};

}
