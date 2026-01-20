import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();


@Component({
  selector: 'app-blog-slider-breadcrumb',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-slider-breadcrumb.component.html',
  styleUrl: './blog-slider-breadcrumb.component.scss'
})
export class BlogSliderBreadcrumbComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;

  public slider_data = [
    {
      id: 1,
      bg: '/assets/img/blog/breadcrumb/blog-breadcrumb-slider-1.jpg',
      tag: 'Business',
      title: 'Investment Trend Monitor: Top Trends in 2023',
      date: 'October 24, 2022',
      comment: '35',
      watch: '234,5k'
    },
    {
      id: 2,
      bg: '/assets/img/blog/breadcrumb/blog-breadcrumb-slider-2.jpg',
      tag: 'Creative',
      title: 'Things Your Boss Needs To Know Agency Industry.',
      date: 'October 26, 2022',
      comment: '40',
      watch: '180,2k'
    },
    {
      id: 3,
      bg: '/assets/img/blog/breadcrumb/blog-breadcrumb-slider-3.jpg',
      tag: 'Agency',
      title: 'The Reasons Why We Love The Agency Industry.',
      date: 'November 15, 2022',
      comment: '25',
      watch: '150,3k'
    },
    {
      id: 4,
      bg: '/assets/img/blog/breadcrumb/blog-breadcrumb-slider-4.jpg',
      tag: 'Latest',
      title: 'Here What Industry Insiders Say About Agency.',
      date: 'December 10, 2022',
      comment: '22',
      watch: '118,6k'
    },
  ]

  ngAfterViewInit() {
    if (this.swiperContainer) {
      this.swiperInstance =  new Swiper('.blog__breadcrumb-slider-active', {
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 0,
        pagination: {
          el: ".blog-slider-dot-breadcrumb",
          clickable: true,
        },
      });
    }
  }


}
