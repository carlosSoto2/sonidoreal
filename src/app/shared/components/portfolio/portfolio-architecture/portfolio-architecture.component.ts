import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-architecture',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './portfolio-architecture.component.html',
  styleUrl: './portfolio-architecture.component.scss'
})
export class PortfolioArchitectureComponent {

  public activeBg = "portfolio-img-2";
  // handleActiveBg
   handleActiveBg  (src:string) {
    this.activeBg = src;
  };

  public portfolio_images = [
    {id:1,img:'/assets/img/portfolio/8/portfolio-1.jpg'},
    {id:2,img:'/assets/img/portfolio/8/portfolio-2.jpg'},
    {id:3,img:'/assets/img/portfolio/8/portfolio-3.jpg'},
    {id:4,img:'/assets/img/portfolio/8/portfolio-4.jpg'},
    {id:5,img:'/assets/img/portfolio/8/portfolio-5.jpg'},
    {id:6,img:'/assets/img/portfolio/8/portfolio-6.jpg'},
  ]

  portfolio_slider_data = [
    {
      id: 1,
      year: 2022,
      meta: "Kiev, Ukraine",
      title: "Cubic Blockes Hotel",
    },
    {
      id: 2,
      year: 2022,
      meta: "Dawsbury, Hungery",
      title: "Spring Castle Hotel",
    },
    {
      id: 3,
      year: 2022,
      meta: "Drumchapel, New Town",
      title: "Tranquil Orb Resort",
    },
    {
      id: 4,
      year: 2022,
      meta: "Cape Town, China",
      title: "Pova Hotel & Spa",
    },
    {
      id: 5,
      year: 2022,
      meta: "Antertic, South Asia",
      title: "Nebula Resort",
    },
    {
      id: 6,
      year: 2022,
      meta: "City, America",
      title: "Sapphire Court Motel",
    },
  ];

  ngOnInit(): void {
    new Swiper('.portfolio__slider-active-8', {
      slidesPerView: 4,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: ".portfolio-button-next-8",
        prevEl: ".portfolio-button-prev-8",
      },
      breakpoints: {
        '1600': {
          slidesPerView: 4,
        },
        '1200': {
          slidesPerView: 3,
        },
        '992': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
}
