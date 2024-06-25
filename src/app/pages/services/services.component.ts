import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { ServiceAreaOneComponent } from '../../shared/components/service/service-area-one/service-area-one.component';
import { VisionAreaTwoComponent } from '../../shared/components/vision/vision-area-two/vision-area-two.component';
import { PortfolioAreaOneComponent } from '../../shared/components/portfolio/portfolio-area-one/portfolio-area-one.component';
import { FooterFourComponent } from '../../shared/footer/footer-four/footer-four.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,ServiceAreaOneComponent,VisionAreaTwoComponent,PortfolioAreaOneComponent,FooterFourComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
