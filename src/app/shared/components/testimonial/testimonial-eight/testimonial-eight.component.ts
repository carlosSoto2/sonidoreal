import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-testimonial-eight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-eight.component.html',
  styleUrl: './testimonial-eight.component.scss'
})
export class TestimonialEightComponent {

  // thumb nav data
  public slider_thumb_nav = [
    '/assets/img/users/user-1.jpg',
    '/assets/img/users/user-2.jpg',
    '/assets/img/users/user-3.jpg',
    '/assets/img/users/user-14.jpg',
    '/assets/img/users/user-15.jpg',
  ];

  // testimonial data
  testimonial_data = [
    {
      heading: "Great Effort From Team",
      desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
      name: "Shahnewaz Sakil",
    },
    {
      heading: "Happy to deal with them",
      desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
      name: "Steven Smith",
    },
    {
      heading: "Awesome product features",
      desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
      name: "Jahanara Bibi",
    },
    {
      heading: "Their support is so cool",
      desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
      name: "Jinny Carter",
    },
    {
      heading: "Happy to deal with them",
      desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
      name: "Shanelle Blake",
    },
  ];

  ngOnInit() {
    const swiper = new Swiper(".testimonial__slider-nav-9", {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".testimonial__slider-active-9", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".testimonial-9-button-next",
        prevEl: ".testimonial-9-button-prev"
      },
      autoplay: {
        delay: 8000,
      }
    });
  }
}
