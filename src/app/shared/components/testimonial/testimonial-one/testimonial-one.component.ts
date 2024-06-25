import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

@Component({
  selector: 'app-testimonial-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-one.component.html',
  styleUrl: './testimonial-one.component.scss'
})
export class TestimonialOneComponent {

  testimonial_items = [
    {
      id: 1,
      user: '/assets/img/users/user-1.jpg',
      title: "Cody Fisher",
      designation: "Starbucks",
      desc: "Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.",
    },
    {
      id: 2,
      user: '/assets/img/users/user-2.jpg',
      title: "Naim Ahmed",
      designation: "ThemePure",
      desc: "Quia dolore eos voluptas  rem  aut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.",
    },
    {
      id: 3,
      user: '/assets/img/users/user-3.jpg',
      title: "Steven Paul",
      designation: "Mcdoal",
      desc: "Qui exercitationem nisi aut dolor os voluptas consequuntur est assumenda quae aut omnis unde. Iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.",
    },
    {
      id: 4,
      user: '/assets/img/users/user-4.jpg',
      title: "Quali Mac",
      designation: "Suddly",
      desc: "vero iure rem quia dolore voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at  aut voluptas commodi est aliquid repellat.",
    },
  ]

  brand_data = [
    '/assets/img/brand/brand-2.png',
    '/assets/img/brand/brand-3.png',
    '/assets/img/brand/brand-4.png',
    '/assets/img/brand/brand-5.png',
    '/assets/img/brand/brand-6.png',
    '/assets/img/brand/brand-3.png',
  ]
  ngOnInit (){
    // testimonial active
    new Swiper('.testimonial__slider-active', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".testimonial-slider-dot",
        clickable: true,
      },
      modules: [Pagination],
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
    });

    // brand slider active
    new Swiper('.brand__slider-active', {
      slidesPerView: 5,
      spaceBetween: 0,
      pagination: {
        el: ".brand-slider-dot",
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        '1200': {
          slidesPerView: 5,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 2,
        },
      },
    });
  }
}
