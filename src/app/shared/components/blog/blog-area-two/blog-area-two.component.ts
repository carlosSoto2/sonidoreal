import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import blog_data from '../../../data/blog-data';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-area-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-two.component.html',
  styleUrl: './blog-area-two.component.scss'
})
export class BlogAreaTwoComponent {
  public blog_items = [...blog_data].filter(b => b.page === 'home_lawyer');

  ngOnInit(): void {
    // blog slider active
    new Swiper('.blog__slider-active', {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: ".blog-slider-4",
        clickable: true,
      },
      navigation: {
        nextEl: ".blog-slider-button-next",
        prevEl: ".blog-slider-button-prev",
      },
      breakpoints: {
        '1400': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 2,
          centeredSlides: false,
        },
        '992': {
          slidesPerView: 2,
          centeredSlides: false,
        },
        '768': {
          slidesPerView: 2,
          centeredSlides: false,
        },
        '576': {
          slidesPerView: 1,
          centeredSlides: false,
        },
        '0': {
          slidesPerView: 1,
          centeredSlides: false,
        },
      },
    });
  }
}
