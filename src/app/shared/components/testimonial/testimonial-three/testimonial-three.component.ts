import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-testimonial-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-three.component.html',
  styleUrl: './testimonial-three.component.scss'
})
export class TestimonialThreeComponent {

  // thumb nav data
  slider_thumb_nav = [
    '/assets/img/users/user-1.jpg',
    '/assets/img/users/user-2.jpg',
    '/assets/img/users/user-3.jpg',
    '/assets/img/users/user-4.jpg',
    '/assets/img/users/user-5.jpg',
    '/assets/img/users/user-6.jpg',
  ];
  // testimonial_data
  testimonial_data = [
    {
      desc: "“ There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
      name: "Fleece Harrygold",
      designation: "Project Manager",
    },
    {
      desc: "“ Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text There are many variations passages Lorem  ”",
      name: "Naim Ahmed",
      designation: "Developer",
    },
    {
      desc: "“ Suffered alteration in some form by injected humour randomised There are many variations passages Lorem Ipsum available but the majority look embarrassing hidden in middle text ”",
      name: "Stiven Smith",
      designation: "Themepure Member",
    },
    {
      desc: "“  Humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected hidden in middle text ”",
      name: "Gomz Itsa",
      designation: "Designer",
    },
    {
      desc: "“ Injected humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by  hidden in middle text ”",
      name: "Unika Kala",
      designation: "UI/UX Designer",
    },
    {
      desc: "“ Lorem Ipsum available but the majority suffered there are many variations passages alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
      name: "Helen Klintong",
      designation: "SEO Expert",
    },
  ];

  ngOnInit(){
    const swiper = new Swiper(".testimonial__slider-nav", {
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
     new Swiper(".testimonial__slider-active-2", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".testimonial-2-button-next",
        prevEl: ".testimonial-2-button-prev"
      },
      autoplay: {
        delay: 8000,
      }
    });
  }
}
