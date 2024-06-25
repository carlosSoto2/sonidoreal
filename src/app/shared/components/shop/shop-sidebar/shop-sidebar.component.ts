import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-shop-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-sidebar.component.html',
  styleUrl: './shop-sidebar.component.scss'
})
export class ShopSidebarComponent {

  @Input() shop_right:boolean = false;
}
