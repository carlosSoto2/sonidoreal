import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileMenusComponent } from '../mobile-menus/mobile-menus.component';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-offcanvas-six',
  standalone: true,
  imports: [CommonModule,RouterModule,MobileMenusComponent],
  templateUrl: './offcanvas-six.component.html',
  styleUrl: './offcanvas-six.component.scss'
})
export class OffcanvasSixComponent {

  constructor(public utilsService:UtilsService) {};
}
