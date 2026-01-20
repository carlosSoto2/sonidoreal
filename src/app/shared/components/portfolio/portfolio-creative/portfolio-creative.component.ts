import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-portfolio-creative',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-creative.component.html',
  styleUrl: './portfolio-creative.component.scss'
})
export class PortfolioCreativeComponent {

  public items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  public isActiveImg = false;
  public portfolio_images = [
    '/assets/img/portfolio/6/portfolio-1.jpg',
    '/assets/img/portfolio/6/portfolio-2.jpg',
    '/assets/img/portfolio/6/portfolio-3.jpg',
    '/assets/img/portfolio/6/portfolio-4.jpg',
    '/assets/img/portfolio/6/portfolio-5.jpg',
    '/assets/img/portfolio/6/portfolio-6.jpg',
    '/assets/img/portfolio/6/portfolio-7.jpg',
    '/assets/img/portfolio/6/portfolio-8.jpg',
  ]

  handleActiveImg (value:boolean) {
    this.isActiveImg = value;
  }

  ngOnInit () {

    this.items = this.portfolio_images.map(img => new ImageItem({ src: img, thumb: img }));

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);

    // slider active
    new Swiper('.portfolio__slider-active-6', {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: false,
      speed: 3000,
      autoplay: {
        delay: 3000,
      },
      modules: [Autoplay],
      breakpoints: {
        '1600': {
          slidesPerView: 5,
        },
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '0': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
}
