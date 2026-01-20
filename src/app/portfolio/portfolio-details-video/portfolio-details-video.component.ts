import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { PortfolioPostFormComponent } from '../../shared/components/form/portfolio-post-form/portfolio-post-form.component';
import { UtilsService } from '../../shared/services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-details-video',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderOneComponent,
    VideoPopupComponent,
    FooterOneComponent,
    PortfolioPostFormComponent,
  ],
  templateUrl: './portfolio-details-video.component.html',
  styleUrl: './portfolio-details-video.component.scss',
})

export class PortfolioDetailsVideoComponent {

  constructor(public utilsService: UtilsService) {};

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
