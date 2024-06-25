import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { UtilsService } from '../../shared/services/utils.service';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-metro',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent,VideoPopupComponent, FooterOneComponent],
  templateUrl: './portfolio-metro.component.html',
  styleUrl: './portfolio-metro.component.scss'
})
export class PortfolioMetroComponent {
  public perView: number = 3;

  constructor(public utilsService: UtilsService) { };

  public portfolio_data = [
    {
      img: '/assets/img/portfolio/metro/portfolio-metro-1.jpg',
      category: 'Original',
      title: 'Original Coffee',
      subtitle: 'Success needs hard work. Don’t listen to these ‘get rich quick’ schemes you need to build,..!',
      video_id: '1gyTUHP6ne8'
    },
    {
      img: '/assets/img/portfolio/metro/portfolio-metro-2.jpg',
      category: 'Branding',
      title: 'Branding Design',
      subtitle: 'Success needs hard work. Don’t listen to these ‘get rich quick',
    },
    {
      img: '/assets/img/portfolio/metro/portfolio-metro-3.jpg',
      category: 'Mockup',
      title: 'Magazine Cover',
      subtitle: 'Success needs hard work. Don’t listen to these ‘get rich quick',
    },
    {
      img: '/assets/img/portfolio/metro/portfolio-metro-4.jpg',
      category: 'Branding',
      title: 'The Same Creation',
      subtitle: 'Pink pastel business card paper mockups.',
      video_id: 'Xm2VKy2a6aQ',
    },
    {
      img: '/assets/img/portfolio/metro/portfolio-metro-5.jpg',
      category: 'Creative',
      title: 'Hancraft Art of paint',
      subtitle: 'Pink pastel business card paper mockups.',
    },
  ]

  handlePerView() {
    this.perView += 1;
  }
}
