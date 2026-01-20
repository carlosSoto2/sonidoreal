import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwelveComponent } from '../../shared/header/header-twelve/header-twelve.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { CommonBreadcrumbComponent } from '../../shared/components/breadcrumb/common-breadcrumb/common-breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwelveComponent,CommonBreadcrumbComponent,FooterSixComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  value = 1;

  increment() {
    this.value++;
  }
  decrement() {
    if (this.value > 1) {
      this.value--;
    }
  }
}
