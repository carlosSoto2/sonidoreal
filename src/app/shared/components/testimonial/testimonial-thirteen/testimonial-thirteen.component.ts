import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-testimonial-thirteen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-thirteen.component.html',
  styleUrl: './testimonial-thirteen.component.scss'
})
export class TestimonialThirteenComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  @ViewChild('swiperContainerTwo') swiperContainerTwo!: ElementRef;
  public swiperInstanceTwo: Swiper | undefined;

  testimonial_data = [
    {
      id: 1,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-1.jpg',
      name: "Rodney Artichoke",
      designation: "Manager",
    },
    {
      id: 2,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-2.jpg',
      name: "Lurch Schpellchek",
      designation: "Developer",
    },
    {
      id: 3,
      ratings: [1, 2, 3, 4],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-3.jpg',
      name: "Pelican Steve",
      designation: "UI Designer",
    },
    {
      id: 4,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-4.jpg',
      name: "Nathaneal Down",
      designation: "Supporter",
    },
    {
      id: 5,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-2.jpg',
      name: "Lurch Schpellchek",
      designation: "Developer",
    },
  ];

  brands = [
    '/assets/img/brand/7/brand-1.png',
    '/assets/img/brand/7/brand-2.png',
    '/assets/img/brand/7/brand-3.png',
    '/assets/img/brand/7/brand-4.png',
    '/assets/img/brand/7/brand-5.png',
    '/assets/img/brand/7/brand-2.png',
  ]

  ngAfterViewInit() {
    if (this.swiperContainer) {
      this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".testimonial-slider-dot-15",
          clickable: true,
        },
        breakpoints: {
          '1200': {
            slidesPerView: 4,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 1,
          },
          '0': {
            slidesPerView: 1,
          },
        },
        navigation: {
          nextEl: ".testimonial-15-button-next",
          prevEl: ".testimonial-15-button-prev",
        }
      });
    }
    if (this.swiperContainerTwo) {
      this.swiperInstanceTwo = new Swiper(this.swiperContainerTwo.nativeElement, {
        slidesPerView: 5,
        spaceBetween: 0,
        pagination: {
          el: ".brand-slider-dot-7",
          clickable: true,
        },
        breakpoints: {
          '1200': {
            slidesPerView: 5,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 4,
          },
          '576': {
            slidesPerView: 3,
          },
          '0': {
            slidesPerView: 2,
          },
        }
      });
    }
  }

}
