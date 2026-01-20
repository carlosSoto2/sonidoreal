import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import Swiper from 'swiper';
import {register} from 'swiper/element';
register();
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { ServiceAreaSevenComponent } from '../../shared/components/service/service-area-seven/service-area-seven.component';
import { PersonalPortAwardsComponent } from '../../shared/components/awards/personal-port-awards/personal-port-awards.component';
import { UtilsService } from '../../shared/services/utils.service';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { TeamAreaOneComponent } from '../../shared/components/team/team-area-one/team-area-one.component';
import { BrandSliderTwoComponent } from '../../shared/components/brand/brand-slider-two/brand-slider-two.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { CtaAreaSevenComponent } from '../../shared/components/cta/cta-area-seven/cta-area-seven.component';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderOneComponent, ServiceAreaSevenComponent, PersonalPortAwardsComponent, VideoPopupComponent, TeamAreaOneComponent, BrandSliderTwoComponent, FooterSixComponent, CtaAreaSevenComponent, FooterOneComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(public utilsService: UtilsService) { };

  public gallery_images = [
    '/assets/img/slider/about/about-gallery-slider-1.jpg',
    '/assets/img/slider/about/about-gallery-slider-2.jpg',
    '/assets/img/slider/about/about-gallery-slider-3.jpg',
    '/assets/img/slider/about/about-gallery-slider-2.jpg',
  ];

  faq_items = [
    {
      id: "one",
      title: "Can I cancel my account at any time?",
      show: true,
      desc: "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
    },
    {
      id: "two",
      title: "What happens after the license expires?",
      desc: "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
    },
    {
      id: "three",
      title: "Does Harry have any documentations?",
      desc: "Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.",
    }
  ]

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }

  ngOnInit(): void {
    new Swiper('.about__gallery-slider-active', {
      slidesPerView: 1,
      spaceBetween: 80,
      navigation: {
        nextEl: '.about-button-next',
        prevEl: '.about-button-prev'
      }
    });
  }
}
