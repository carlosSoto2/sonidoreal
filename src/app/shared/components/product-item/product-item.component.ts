import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { IProductDT } from '../../types/product-d-t';
import { UtilsService } from '../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input() product!: IProductDT;

  constructor(public utilsService:UtilsService){};
}
