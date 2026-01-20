import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-cart-mini-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart-mini-sidebar.component.html',
  styleUrl: './cart-mini-sidebar.component.scss'
})
export class CartMiniSidebarComponent {

  constructor(public utilsService:UtilsService) {};
}
