import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();

@Component({
  selector: 'app-testimonial-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-two.component.html',
  styleUrl: './testimonial-two.component.scss'
})
export class TestimonialTwoComponent {

  testimonial_data = [
    {
      userImg: '/assets/img/users/user-1.jpg',
      ratings: [1, 2, 3, 4, 5],
      desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
      name: "Joss Sticks",
      title: "CEO at Fast Ventures",
    },
    {
      userImg: '/assets/img/users/user-2.jpg',
      ratings: [1, 2, 3, 4],
      desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
      name: "Naim Ahmed",
      title: "Developer ThemePure",
    },
    {
      userImg: '/assets/img/users/user-3.jpg',
      ratings: [1, 2, 3, 4, 5],
      desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
      name: "Steven Smith",
      title: "MD at Stark Ltd.",
    },
  ]

  ngOnInit(): void {
    // testimonial slider active
    new Swiper('.testimonial__slider-active-4', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".testimonial-slider-dot-4",
        clickable: true,
      },
      breakpoints: {
        '1200': {
          slidesPerView: 1,
        },
        '992': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".testimonial-4-button-next",
        prevEl: ".testimonial-4-button-prev",
      },
    });
  }
}
