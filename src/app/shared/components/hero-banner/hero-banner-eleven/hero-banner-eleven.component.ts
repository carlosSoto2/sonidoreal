import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();

@Component({
  selector: 'app-hero-banner-eleven',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hero-banner-eleven.component.html',
  styleUrl: './hero-banner-eleven.component.scss',
})
export class HeroBannerElevenComponent {

  public slider_data = [
    {
      id: 1,
      pre_title: 'Best Ear <br /> Headphones',
      title: 'Find Best <br /> Matley Sound.',
      img: '/assets/img/slider/13/slider-1.png',
    },
    {
      id: 2,
      pre_title: 'Best Ear <br /> Headphones',
      title: 'Find Best <br /> Matley Sound.',
      img: '/assets/img/slider/13/slider-1.png',
    },
    {
      id: 3,
      pre_title: 'Best Ear <br /> Headphones',
      title: 'Find Best <br /> Matley Sound.',
      img: '/assets/img/slider/13/slider-1.png',
    },
    {
      id: 4,
      pre_title: 'Best Ear <br /> Headphones',
      title: 'Find Best <br /> Matley Sound.',
      img: '/assets/img/slider/13/slider-1.png',
    },
  ];

  ngOnInit(): void {
    new Swiper('.slider__active-13', {
      slidesPerView: 1,
      loop: false,
      effect: 'fade',
      pagination: {
        el: '.main-slider-dot, .main-slider-dot-8',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-button-next, .slider-button-8-next',
        prevEl: '.slider-button-prev, .slider-button-8-prev',
      },
    });
  }
}
