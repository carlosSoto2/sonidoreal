import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-brand-slider-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-slider-one.component.html',
  styleUrl: './brand-slider-one.component.scss'
})
export class BrandSliderOneComponent {

  public brands = [
    '/assets/img/brand/2/brand-1.png',
    '/assets/img/brand/2/brand-2.png',
    '/assets/img/brand/2/brand-3.png',
    '/assets/img/brand/2/brand-4.png',
    '/assets/img/brand/2/brand-5.png',
    '/assets/img/brand/2/brand-6.png',
    '/assets/img/brand/2/brand-2.png',
    '/assets/img/brand/2/brand-5.png',
  ]
  ngOnInit() {
    new Swiper('.brand__slider-active-2', {
      slidesPerView: 6,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".brand-slider-dot",
        clickable: true,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 6,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 2,
        },
      },
    });
  }
}
