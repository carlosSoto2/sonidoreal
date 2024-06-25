import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio-photographer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './portfolio-photographer.component.html',
  styleUrl: './portfolio-photographer.component.scss'
})

export class PortfolioPhotographerComponent {

  public portfolio_items = [
    {
      id: 1,
      img: '/assets/img/portfolio/3/portfolio-1.jpg',
      tag: "Fashion",
      title: "The Power of Personality",
      camera: "Canon EOS 2D",
      city: "New York",
      date: "Oct 24, 2022",
    },
    {
      id: 2,
      img: '/assets/img/portfolio/3/portfolio-2.jpg',
      tag: "Nature",
      title: "Pacific Northwest",
      camera: "Canon EOS 2D",
      city: "New York",
      date: "Jan 20, 2022",
    },
    {
      id: 3,
      img: '/assets/img/portfolio/3/portfolio-3.jpg',
      tag: "Campaign Event",
      title: "Apple TV Campaign",
      camera: "Canon EOS 2D",
      city: "New York",
      date: "Feb 15, 2022",
    },
    {
      id: 4,
      img: '/assets/img/portfolio/3/portfolio-4.jpg',
      tag: "photography",
      title: "Pacific Northwest",
      camera: "Canon EOS 2D",
      city: "New York",
      date: "May 15, 2022",
    },
    {
      id: 5,
      img: '/assets/img/portfolio/3/portfolio-5.jpg',
      tag: "Fashion",
      title: "Trending Fashion",
      camera: "Canon EOS 2D",
      city: "New York",
      date: "July 15, 2022",
    },
    {
      id: 6,
      img: '/assets/img/portfolio/3/portfolio-6.jpg',
      tag: "photography",
      title: "Pacific Northwest",
      camera: "Canon EOS 2D",
      city: "New York",
      date: "April 15, 2022",
    },
  ]

  ngOnInit (){
    new Swiper('.portfolio__slider-active', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }
    });
  }

}
