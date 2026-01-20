import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { PortfolioPostFormComponent } from '../../shared/components/form/portfolio-post-form/portfolio-post-form.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';

@Component({
  selector: 'app-portfolio-details-slider',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,PortfolioPostFormComponent,FooterOneComponent],
  templateUrl: './portfolio-details-slider.component.html',
  styleUrl: './portfolio-details-slider.component.scss'
})
export class PortfolioDetailsSliderComponent {

  ngOnInit(): void {
    new Swiper('.portfolio__details-slider-active-2', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.portfolio-details-2-button-next',
        prevEl: '.portfolio-details-2-button-prev'
      }
    });
  }
}
