import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-testimonial-nine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-nine.component.html',
  styleUrl: './testimonial-nine.component.scss'
})
export class TestimonialNineComponent {

  testimonial_items = [
    {
      desc: "“Thank you guys for your excellent efforts and commitment in assisting us in our project! I would like to express my thanks for the work you have done!”",
      name: "Cody Fisher",
      designation: "Fonder of Incredible",
    },
    {
      desc: "“There are many variations passages Lorem Ipsum available the   majority suffered alteration in some form by injected humour look embarrassing in middle”",
      name: "Cody Fisher",
      designation: "Fonder of Incredible",
    },
    {
      desc: "“Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore est aliquid repellat.”",
      name: "Cody Fisher",
      designation: "Fonder of Incredible",
    },
    {
      desc: "“Quia dolore eosaut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.”",
      name: "Cody Fisher",
      designation: "Fonder of Incredible",
    },
  ]

  testimonial_thumbs = [
    '/assets/img/users/user-1.jpg',
    '/assets/img/users/user-5.jpg',
    '/assets/img/users/user-3.jpg',
    '/assets/img/users/user-4.jpg',
  ]

  ngOnInit() {
    const swiper = new Swiper(".testimonial__slider-8-thumb", {
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".testimonial__slider-active-8", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".testimonial-8-button-next",
        prevEl: ".testimonial-8-button-prev"
      },
      autoplay: {
        delay: 8000,
      }
    });
  }
}
