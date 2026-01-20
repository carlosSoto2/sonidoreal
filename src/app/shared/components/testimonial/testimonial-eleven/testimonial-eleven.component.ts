import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import {register} from 'swiper/element';
register();

@Component({
  selector: 'app-testimonial-eleven',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './testimonial-eleven.component.html',
  styleUrl: './testimonial-eleven.component.scss'
})
export class TestimonialElevenComponent {

  testimonial_items = [
    {
      user: '/assets/img/users/user-9.jpg',
      ratings: [1, 2, 3, 4, 5],
      desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
      name: "Joss Sticks",
      title: "CEO at Fast Ventures",
    },
    {
      user: '/assets/img/users/user-8.jpg',
      ratings: [1, 2, 3, 4, 5],
      desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
      name: "Naim Ahmed",
      title: "Developer at ThemePure",
    },
    {
      user: '/assets/img/users/user-7.jpg',
      ratings: [1, 2, 3, 4, 5],
      desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
      name: "Steven Smith",
      title: "MD at Stark Ltd.",
    },
  ]

  ngOnInit(): void {
    new Swiper('.testimonial__slider-active-14', {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".testimonial-slider-dot-14",
        clickable: true,
      },
      navigation: {
        nextEl: ".testimonial-14-button-next",
        prevEl: ".testimonial-14-button-prev",
      },
    });
  }
}
