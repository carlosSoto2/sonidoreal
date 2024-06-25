import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-instagram-area-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-area-one.component.html',
  styleUrl: './instagram-area-one.component.scss'
})
export class InstagramAreaOneComponent {

  instagram_items = [
    { img: '/assets/img/instagram/instagram-1.jpg', link: "https://www.instagram.com/" },
    { img: '/assets/img/instagram/instagram-2.jpg', link: "https://www.instagram.com/" },
    { img: '/assets/img/instagram/instagram-3.jpg', link: "https://www.instagram.com/" },
    { img: '/assets/img/instagram/instagram-4.jpg', link: "https://www.instagram.com/" },
    { img: '/assets/img/instagram/instagram-5.jpg', link: "https://www.instagram.com/" },
    { img: '/assets/img/instagram/instagram-6.jpg', link: "https://www.instagram.com/" },
    { img: '/assets/img/instagram/instagram-7.jpg', link: "https://www.instagram.com/" },
    { img: '/assets/img/instagram/instagram-3.jpg', link: "https://www.instagram.com/" },
  ]

  ngOnInit() {
    new Swiper('.instagram__slider-active', {
      slidesPerView: 6,
      spaceBetween: 12,
      loop: false,
      breakpoints: {
        '1400': {
          slidesPerView: 6,
        },
        '1200': {
          slidesPerView: 5,
        },
        '992': {
          slidesPerView: 4,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
  }
}
