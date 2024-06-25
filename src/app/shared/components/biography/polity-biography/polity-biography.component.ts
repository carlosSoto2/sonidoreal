import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-polity-biography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './polity-biography.component.html',
  styleUrl: './polity-biography.component.scss'
})
export class PolityBiographyComponent {

  public biography_items = [
    {
      bg: '/assets/img/biography/biography-1.jpg',
      date: "01 April 2014",
      title: "Stand with our campaign for working political",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    },
    {
      bg: '/assets/img/biography/biography-2.jpg',
      date: "22 June 2015",
      title: "Iranian Regime Thugs Fire on – Drive-By Killers",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    },
    {
      bg: '/assets/img/biography/biography-3.jpg',
      date: "04 Jan 2016",
      title: "The Irony of information: Enduring Solutions",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    },
    {
      bg: '/assets/img/biography/biography-4.jpg',
      date: "26 Sept 2017",
      title: "Combating information by Truth and Trust",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    },
    {
      bg: '/assets/img/biography/biography-5.jpg',
      date: "14 Aug 2018",
      title: "'Truth Decay' in Europe Is Real, Advance Slowed",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    },
    {
      bg: '/assets/img/biography/biography-6.jpg',
      date: "08 May 2019",
      title: "Supporting the People of Ukraine Through Cities",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    },
    {
      bg: '/assets/img/biography/biography-7.jpg',
      date: "21 July 2020",
      title: "Homelessness in L.A., Russia Morale:",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
    },
  ]
  public biography_year = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];

  ngOnInit() {
    const swiper = new Swiper(".biography__slider-nav", {
      spaceBetween: 0,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints:{
        1400: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 2,
        },
      }
    });
    new Swiper(".biography__slider-content-active", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
    });
  }
}
