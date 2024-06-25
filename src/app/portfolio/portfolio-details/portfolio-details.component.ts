import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import {register} from 'swiper/element';
register();
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import sal from 'sal.js';
import { CounterAreaThreeComponent } from '../../shared/components/counter/counter-area-three/counter-area-three.component';
import { PortfolioPostFormComponent } from '../../shared/components/form/portfolio-post-form/portfolio-post-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,CounterAreaThreeComponent,PortfolioPostFormComponent,FooterOneComponent],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent {


  ngOnInit(): void {
    new Swiper('.portfolio__details-slider-active', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.portfolio-details-slider-dot',
        clickable: true
      }
    });
  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
