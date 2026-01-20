import { Component, Input } from '@angular/core';
import { IProductDT } from '../../../types/product-d-t';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-list-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './shop-list-item.component.html',
  styleUrl: './shop-list-item.component.scss'
})
export class ShopListItemComponent {
  @Input() product!: IProductDT;
  constructor(public utilsService:UtilsService){};
}
