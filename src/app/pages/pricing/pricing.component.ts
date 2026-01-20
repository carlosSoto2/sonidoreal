import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { PricingStartupComponent } from '../../shared/components/pricing/pricing-startup/pricing-startup.component';
import { TestimonialThirteenComponent } from '../../shared/components/testimonial/testimonial-thirteen/testimonial-thirteen.component';
import { CommonFaqComponent } from '../../shared/components/faq/common-faq/common-faq.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule,HeaderOneComponent,PricingStartupComponent,TestimonialThirteenComponent,CommonFaqComponent,FooterSixComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }

}
