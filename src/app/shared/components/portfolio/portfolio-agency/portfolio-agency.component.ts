import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-agency',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './portfolio-agency.component.html',
  styleUrl: './portfolio-agency.component.scss'
})
export class PortfolioAgencyComponent {

  public items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {};

  public portfolio_items = [
    {
      id:1,
      img:'/assets/img/portfolio/5/portfolio-1.jpg',
      tag:'Sports',
      title:'Stadium Sports Cards'
    },
    {
      id:2,
      img:'/assets/img/portfolio/5/portfolio-2.jpg',
      tag:'Branding & Digital Platforms',
      title:'Aliens do 3D Automobile'
    },
    {
      id:3,
      img:'/assets/img/portfolio/5/portfolio-3.jpg',
      tag:'Branding & Identity',
      title:'Gallery Portfolio'
    },
    {
      id:4,
      img:'/assets/img/portfolio/5/portfolio-4.jpg',
      tag:'Custom Print',
      title:'Artboard Studio'
    },
    {
      id:5,
      img:'/assets/img/portfolio/5/portfolio-5.jpg',
      tag:'Custom Print',
      title:'Artboard Studio'
    },
    {
      id:6,
      img:'/assets/img/portfolio/5/portfolio-6.jpg',
      tag:'Branding & Identity',
      title:'Gallery Portfolio'
    }
  ]

  ngOnInit () {

    this.items = this.portfolio_items.map(item => new ImageItem({ src: item.img, thumb: item.img }));

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);

    // slider active
    new Swiper('.portfolio__slider-active-5', {
      slidesPerView: 4,
      spaceBetween: 15,
      pagination: {
        el: ".portfolio-slider-dot-5",
        clickable: true,
      },
      navigation: {
        nextEl: ".portfolio-button-next-5",
        prevEl: ".portfolio-button-prev-5",
      },
      modules: [Pagination,Navigation],
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
        },
      },
    });
  }
}
