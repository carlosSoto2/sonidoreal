import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import {register} from 'swiper/element';
register();

@Component({
  selector: 'app-testimonial-ten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-ten.component.html',
  styleUrl: './testimonial-ten.component.scss'
})
export class TestimonialTenComponent {

  // data
  public testimonial_data = [
    {
      desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
      link_text: "https://t.co/7v3HQbZqwZ",
      link: "#",
      name: "Jason Smith",
      title: "President",
      date: "July 17, 2022",
    },
    {
      desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
      link_text: "https://t.co/7v3HQbZqwZ",
      link: "#",
      name: "Jason Smith",
      title: "President",
      date: "July 18, 2022",
    },
    {
      desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
      link_text: "https://t.co/7v3HQbZqwZ",
      link: "#",
      name: "Jason Smith",
      title: "President",
      date: "July 19, 2022",
    },
    {
      desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
      link_text: "https://t.co/7v3HQbZqwZ",
      link: "#",
      name: "Jason Smith,",
      title: "President",
      date: "July 20, 2022",
    },
  ]

  ngOnInit() {
    new Swiper('.testimonial__slider-active-10', {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".testimonial-slider-dot-10",
        clickable: true,
      },
      navigation: {
        nextEl: ".testimonial-10-button-next",
        prevEl: ".testimonial-10-button-prev",
      },
    });
  }
}
