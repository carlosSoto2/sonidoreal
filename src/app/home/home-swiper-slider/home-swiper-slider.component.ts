import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();
import { VerticalSliderItemComponent } from '../../shared/components/vertical-slider-item/vertical-slider-item.component';
import svg_icons from '../../shared/data/svg';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OffcanvasSixComponent } from '../../shared/components/offcanvas/offcanvas-six/offcanvas-six.component';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-home-swiper-slider',
  standalone: true,
  imports: [CommonModule,RouterModule,VerticalSliderItemComponent,OffcanvasSixComponent],
  templateUrl: './home-swiper-slider.component.html',
  styleUrl: './home-swiper-slider.component.scss'
})
export class HomeSwiperSliderComponent {

  public svg_icons = svg_icons;

  constructor(private sanitizer: DomSanitizer,public utilsService:UtilsService) {}
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  // slider data
  public slider_data = [
    {
      id: 1,
      img: '/assets/img/slider/12/slider-1.jpg',
      title: "Aristide",
      bg: "",
    },
    {
      id: 2,
      img: '/assets/img/slider/12/slider-2.jpg',
      title: "Rise",
      bg: "has-yellow-gradient",
    },
    {
      id: 3,
      img: '/assets/img/slider/12/slider-3.jpg',
      title: "Karcher",
      bg: "has-red-gradient",
    },
    {
      id: 4,
      img: '/assets/img/slider/12/slider-4.jpg',
      title: "Fashion",
      bg: "has-blue-gradient",
    },
    {
      id: 5,
      img: '/assets/img/slider/12/slider-5.jpg',
      title: "Design",
      bg: "has-purple-gradient",
    },
    {
      id: 6,
      img: '/assets/img/slider/12/slider-6.jpg',
      title: "Creative",
      bg: "slider__item-12-dark has-black-gradient",
    },
  ]

  ngOnInit() {
    let verticalSlider = new Swiper('.slider__active-12', {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      loop: false,
      mousewheel: true,
      pagination: {
        el: '.slider-pagination-12',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' <span class="tp-swiper-fraction-divide"></span> ' + '<span class="' + totalClass + '"></span>';
        }
      },
      navigation: {
        nextEl: ".slider-button-12-next",
        prevEl: ".slider-button-12-prev"
      }
    });

    verticalSlider.on('slideChangeTransitionStart', function () {
      var activeSlide = document.querySelector('.swiper-slide.swiper-slide-active');
      var headerBottom = document.querySelector('.header__bottom-12');

      if (activeSlide && headerBottom) {
        if (activeSlide.classList.contains('slider__item-12-dark')) {
          headerBottom.classList.add('header__white-slider');
        } else {
          headerBottom.classList.remove('header__white-slider');
        }
      } else {
        console.error("Active slide or header bottom is null.");
      }
    });


  }
}
