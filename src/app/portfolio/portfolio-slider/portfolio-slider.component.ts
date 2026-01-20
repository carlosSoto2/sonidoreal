import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { UtilsService } from '../../shared/services/utils.service';
import svg_icons from '../../shared/data/svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-slider',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent, FooterOneComponent, VideoPopupComponent],
  templateUrl: './portfolio-slider.component.html',
  styleUrl: './portfolio-slider.component.scss'
})
export class PortfolioSliderComponent {

  public svg = svg_icons;
  constructor(public utilsService: UtilsService,private sanitizer: DomSanitizer) { };

  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  ngOnInit() {
    new Swiper('.portfolio__horizontal-active', {
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        el: ".portfolio-horizontal-dot",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<button>' + '0' + (index + 1) + '</button>' + "</span>";
        },
      },
      navigation: {
        nextEl: ".portfolio-horizontal-button-next",
        prevEl: ".portfolio-horizontal-button-prev",
      },
    });
  }
}
