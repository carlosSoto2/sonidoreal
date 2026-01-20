import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';


@Component({
  selector: 'app-hero-banner-nine',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-banner-nine.component.html',
  styleUrl: './hero-banner-nine.component.scss',
})
export class HeroBannerNineComponent {
  // slider items
  public slider_items = [
    {
      bg: '/assets/img/slider/8/slider-1.jpg',
      title_first: 'We are a fine',
      highlight_title: 'Architecture',
      title_last: 'firm in New York',
      subtitle:
        'Through a unique combination of engineering, construction and design disciplines and expertise.',
    },
    {
      bg: '/assets/img/slider/8/slider-2.jpg',
      title_first: 'Commercial',
      highlight_title: 'building',
      title_last: 'Concept in village',
      subtitle:
        'Through a unique combination of engineering, construction and design disciplines and expertise.',
    },
    {
      bg: '/assets/img/slider/8/slider-3.jpg',
      title_first: 'Premium',
      highlight_title: 'Real State',
      title_last: 'Developers',
      subtitle:
        'Through a unique combination of engineering, construction and design disciplines and expertise.',
    },
    {
      bg: '/assets/img/slider/8/slider-4.jpg',
      title_first: 'Preparing for',
      highlight_title: 'Sustainable',
      title_last: 'Future Architecture',
      subtitle:
        'Through a unique combination of engineering, construction and design disciplines and expertise.',
    },
  ];

  // slider_nav_items
  public slider_nav_items = [
    {
      id: 1,
      title: "We are a fine Architecture <br /> firm in New York",
      img: '/assets/img/slider/8/nav/slider-nav-1.jpg',
    },
    {
      id: 2,
      title: "Commercial building <br /> Concept in village",
      img: '/assets/img/slider/8/nav/slider-nav-2.jpg',
    },
    {
      id: 3,
      title: "Commercial building <br /> Concept in village",
      img: '/assets/img/slider/8/nav/slider-nav-3.jpg',
    },
    {
      id: 4,
      title: "We are a fine Architecture <br /> firm in New York",
      img: '/assets/img/slider/8/nav/slider-nav-4.jpg',
    },
  ];


  ngOnInit() {
    const swiper = new Swiper(".slider__nav-active", {
      spaceBetween: 0,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".slider__active", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".slider-button-8-next",
        prevEl: ".slider-button-8-prev"
      },
      pagination: {
				el: ".main-slider-dot, .main-slider-dot-8",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + '<button>'+ '0' +(  index + 1)+'</button>' + "</span>";
				},
			},
      autoplay: {
        delay: 8000,
      }
    });
  }
}
