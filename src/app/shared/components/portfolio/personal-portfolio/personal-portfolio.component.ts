import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();

@Component({
  selector: 'app-personal-portfolio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './personal-portfolio.component.html',
  styleUrl: './personal-portfolio.component.scss'
})
export class PersonalPortfolioComponent {

  public portfolio_items = [
    {
      id: 1,
      img: '/assets/img/portfolio/9/portfolio-1.jpg',
      tag: "BRANDING",
      title: "We build great things",
    },
    {
      id: 2,
      img: '/assets/img/portfolio/9/portfolio-2.jpg',
      tag: "BRANDING",
      title: "We build great things",
    },
    {
      id: 3,
      img: '/assets/img/portfolio/9/portfolio-3.jpg',
      tag: "BRANDING",
      title: "We build great things",
    },
    {
      id: 4,
      img: '/assets/img/portfolio/9/portfolio-4.jpg',
      tag: "BRANDING",
      title: "We build great things",
    },
    {
      id: 5,
      img: '/assets/img/portfolio/9/portfolio-5.jpg',
      tag: "BRANDING",
      title: "We build great things",
    },
    {
      id: 6,
      img: '/assets/img/portfolio/9/portfolio-6.jpg',
      tag: "BRANDING",
      title: "We build great things",
    },
    {
      id: 7,
      img: '/assets/img/portfolio/9/portfolio-3.jpg',
      tag: "BRANDING",
      title: "We build great things",
    }
  ]

  ngOnInit() {
    new Swiper('.portfolio__slider-active-9', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: ".portfolio-slider-dot-9",
        clickable: true,
      },
      navigation: {
        nextEl: ".portfolio-button-next-9",
        prevEl: ".portfolio-button-prev-9",
      },
      scrollbar: {
        el: ".tp-scrollbar",
      },
      breakpoints: {
        '1601': {
          slidesPerView: 4,
        },
        '1400': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 2,
        },
        '992': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
}
