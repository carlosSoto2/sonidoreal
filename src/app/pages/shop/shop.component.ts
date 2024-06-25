import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTwelveComponent } from './../../shared/header/header-twelve/header-twelve.component';
import { FooterElevenComponent } from '../../shared/footer/footer-eleven/footer-eleven.component';
import { CtaEightComponent } from '../../shared/components/cta/cta-eight/cta-eight.component';
import { ShopAreaComponent } from '../../shared/components/shop/shop-area/shop-area.component';
import { NiceSelectComponent } from '../../shared/ui/nice-select/nice-select.component';
import { ProductModalComponent } from '../../shared/components/product-modal/product-modal.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,HeaderTwelveComponent,CtaEightComponent,ShopAreaComponent,ProductModalComponent,NiceSelectComponent,FooterElevenComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})

export class ShopComponent {


}
