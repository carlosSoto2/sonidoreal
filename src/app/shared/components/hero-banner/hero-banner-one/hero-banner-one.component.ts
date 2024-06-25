import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import {Navigation, Pagination, EffectFade,Autoplay } from 'swiper/modules';
import { NiceSelectComponent } from '../../../ui/nice-select/nice-select.component';
// import {register} from 'swiper/element';
// register();

@Component({
  selector: 'app-hero-banner-one',
  standalone: true,
  imports: [CommonModule,NiceSelectComponent],
  templateUrl: './hero-banner-one.component.html',
  styleUrl: './hero-banner-one.component.scss'
})
export class HeroBannerOneComponent {

  public slider_data = [
    {
      id: 1,
      pre_title: "Sonido Real",
      title: "Disponible en Android",
      bg: '/assets/img/slider/slider1.webp',
      url:'https://play.google.com/store/apps/details?id=com.g7soluciones.sonidoreal'
    },
    {
      id: 2,
      pre_title: "Hello! Consulting",
      title: "Disponible en IOS",
      bg: '/assets/img/slider/slider-2.jpg',
      url:'https://play.google.com/store/apps/details?id=com.g7soluciones.sonidoreal'
    },
    {
      id: 3,
      pre_title: "Hello! Consulting",
      title: "Digital Age Adventure <br /> In Marketing",
      bg: '/assets/img/slider/slider-3.jpg',
      url:'https://play.google.com/store/apps/details?id=com.g7soluciones.sonidoreal'
    },

  ]

  public event_select  = [
    {value: 'select', text: 'Select Event'},
    {value: 'wedding', text: 'Wedding'},
    {value: 'photography', text: 'Photography'},
    {value: 'consulting', text: 'Consulting'},
  ]

  changeSelectHandler(sValue: { value: string; text: string }) {
    console.log('Selected option:', sValue);
  }

  ngOnInit () {
    new Swiper('.slider__active', {
			slidesPerView: 1,
			loop: false,
			effect: 'fade',
      modules:[Pagination],
      autoplay:{
        delay:1000,
      },
			pagination: {
				el: ".main-slider-dot, .main-slider-dot-8",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + '<button>'+ '0' +(  index + 1)+'</button>' + "</span>";
				},
			},
			navigation: {
				nextEl: ".slider-button-next, .slider-button-8-next",
				prevEl: ".slider-button-prev, .slider-button-8-prev",
			},
		});
  }
}
