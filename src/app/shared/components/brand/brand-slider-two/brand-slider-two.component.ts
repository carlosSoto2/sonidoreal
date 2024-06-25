import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';

register();

@Component({
  selector: 'app-brand-slider-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-slider-two.component.html',
  styleUrl: './brand-slider-two.component.scss'
})
export class BrandSliderTwoComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  @ViewChild('swiperContainerTwo') swiperContainerTwo!: ElementRef;
  public swiperInstanceTwo: Swiper | undefined;

  @Input() spacing = '';
  @Input() style_2 = false;
  @Input() square = false;
  public brands_one = [
    '/assets/img/brand/5/brand-1.png',
    '/assets/img/brand/5/brand-2.png',
    '/assets/img/brand/5/brand-3.png',
    '/assets/img/brand/5/brand-4.png',
    '/assets/img/brand/5/brand-5.png',
    '/assets/img/brand/5/brand-6.png',
    '/assets/img/brand/5/brand-7.png',
    '/assets/img/brand/5/brand-8.png',
    '/assets/img/brand/5/brand-6.png',
    '/assets/img/brand/5/brand-1.png',
  ]
  public brands_two = [
    '/assets/img/brand/5/brand-8.png',
    '/assets/img/brand/5/brand-7.png',
    '/assets/img/brand/5/brand-6.png',
    '/assets/img/brand/5/brand-5.png',
    '/assets/img/brand/5/brand-4.png',
    '/assets/img/brand/5/brand-3.png',
    '/assets/img/brand/5/brand-2.png',
    '/assets/img/brand/5/brand-1.png',
    '/assets/img/brand/5/brand-5.png',
    '/assets/img/brand/5/brand-3.png',
  ]


  ngAfterViewInit() {
    if (this.swiperContainer) {
      this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
        loop: true,
        autoplay: {
          delay: 0,
          pauseOnMouseEnter: true,
        },
        spaceBetween: 15,
        slidesPerView: 1,
        speed: 4000,
        breakpoints: {
          '0': {
            slidesPerView: 1,
          },
          '576': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 4,
          },
          '991': {
            slidesPerView: 5,
          },
          '1200': {
            slidesPerView: 7,
          },
        }
      });
    }
    if (this.swiperContainerTwo) {
      this.swiperInstanceTwo = new Swiper(this.swiperContainerTwo.nativeElement, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        },
        speed: 2000,
        breakpoints: {
          '0': {
            slidesPerView: 1,
          },
          '576': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 4,
          },
          '991': {
            slidesPerView: 5,
          },
          '1200': {
            slidesPerView: 7,
          },
        }
      });
    }
  }
}
