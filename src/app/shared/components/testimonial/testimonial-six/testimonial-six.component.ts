import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import {register} from 'swiper/element';
register();

@Component({
  selector: 'app-testimonial-six',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-six.component.html',
  styleUrl: './testimonial-six.component.scss',
})
export class TestimonialSixComponent {

  // testimonial data
  testimonial_data = [
    {
      ratings: [1, 2, 3, 4, 5],
      title: '“Seriously amazing!”',
      subtitle:
        'Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!',
      user: '/assets/img/users/user-1.jpg',
      name: 'Sarah Smith',
      designation: 'Lead Developer, Google',
    },
    {
      ratings: [1, 2, 3, 4, 5],
      title: '“This office almost relaxing”',
      subtitle:
        'Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!',
      user: '/assets/img/users/user-2.jpg',
      name: 'Eleanor Pena',
      designation: 'COO, Globex Corporation',
    },
    {
      ratings: [1, 2, 3, 4, 5],
      title: 'Awesome Support',
      subtitle:
        'Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!',
      user: '/assets/img/users/user-3.jpg',
      name: 'Carla Wildner',
      designation: 'Design at Mailchimp',
    },
    {
      ratings: [1, 2, 3, 4, 5],
      title: '“Seriously amazing!”',
      subtitle:
        'Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!',
      user: '/assets/img/users/user-4.jpg',
      name: 'Naim Ahmed',
      designation: 'Developer at Theme_Pure',
    },
  ];

  ngOnInit(): void {
    new Swiper('.testimonial__active-7', {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: ".testimonial-slider-dot-7",
        clickable: true,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 3,
        },
        '992': {
          slidesPerView: 2,
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
        nextEl: ".testimonial-7-button-next",
        prevEl: ".testimonial-7-button-prev",
      },
    });
  }
}
