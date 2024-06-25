import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';
import { UtilsService } from '../../shared/services/utils.service';
import { RouterModule } from '@angular/router';
import { HeaderTenComponent } from '../../shared/header/header-ten/header-ten.component';
register();

@Component({
  selector: 'app-home-vertical-slider',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderTenComponent],
  templateUrl: './home-vertical-slider.component.html',
  styleUrl: './home-vertical-slider.component.scss'
})
export class HomeVerticalSliderComponent {

  public activeProductImg = 'product-img-2';

  handleActiveProductImg(img: string) {
    this.activeProductImg = img;
  };

  constructor(public utilsService: UtilsService) { };

  // sm product
  public sm_products = [
    { id: 1, img: '/assets/img/product/slider/sm/product-sm-1.png' },
    { id: 2, img: '/assets/img/product/slider/sm/product-sm-2.png' },
    { id: 3, img: '/assets/img/product/slider/sm/product-sm-3.png' },
  ];

  ngOnInit() {
    let swiperOptions = new Swiper('.slider__active-11', {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      loop: false,
      mousewheel: true,
      pagination: {
        el: ".slider-pagination-11",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
        },
      },
    });

    swiperOptions.on('slideChange', (swiper) => this.utilsService.handleWhiteHeader(swiper.activeIndex));
  }
}
