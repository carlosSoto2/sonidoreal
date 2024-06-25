import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import blog_data from '../../../data/blog-data';
import Swiper from 'swiper';
import {register} from 'swiper/element';
import { RouterModule } from '@angular/router';
register();

@Component({
  selector: 'app-blog-area-eight',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-eight.component.html',
  styleUrl: './blog-area-eight.component.scss'
})
export class BlogAreaEightComponent {

  public blog_items = [...blog_data].filter(b => b.page === 'home_architecture');

  ngOnInit() {
    new Swiper('.blog__slider-active-8', {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
      pagination: {
        el: ".blog-slider-dot-8",
        clickable: true,
      },
      navigation: {
        nextEl: ".blog-8-button-next",
        prevEl: ".blog-8-button-prev",
      },
      breakpoints: {
        '992': {
          slidesPerView: 2,
          centeredSlides: false,
        },
        '768': {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        '576': {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        '0': {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
    });
  }
}
