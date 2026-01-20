import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';

register();

@Component({
  selector: 'app-testimonial-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-four.component.html',
  styleUrl: './testimonial-four.component.scss'
})
export class TestimonialFourComponent {

  public testimonial_data = [
    {
      user: '/assets/img/users/user-1.jpg',
      desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
      name: "Elena Grigoras",
      title: "Co-founder at Mainblades",
    },
    {
      user: '/assets/img/users/user-2.jpg',
      desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
      name: "Fatiha Laauich",
      title: "Strategic Marketing",
    },
    {
      user: '/assets/img/users/user-3.jpg',
      desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
      name: "Jake Weary",
      title: "Head of Technology",
    },
    {
      user: '/assets/img/users/user-4.jpg',
      desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
      name: "Hery Marky",
      title: "Head of Technology",
    },
    {
      user: '/assets/img/users/user-5.jpg',
      desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
      name: "Wilis Megh",
      title: "Head of Technology",
    },
    {
      user: '/assets/img/users/user-6.jpg',
      desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
      name: "Steaven Smit",
      title: "Head of Technology",
    },
  ];

  ngOnInit(): void {
    // testimonial slider active
    new Swiper('.testimonial__slider-5', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
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
        nextEl: ".testimonial-5-button-next",
        prevEl: ".testimonial-5-button-prev",
      },
    });
  }
}
