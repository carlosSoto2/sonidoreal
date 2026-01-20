import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import {register} from 'swiper/element';
register();

@Component({
  selector: 'app-testimonial-seven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-seven.component.html',
  styleUrl: './testimonial-seven.component.scss'
})
export class TestimonialSevenComponent {

  public testimonial_data = [
    {
      id: 1,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-1.jpg',
      name: "Rodney Artichoke",
      designation: "Manager",
    },
    {
      id: 2,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-2.jpg',
      name: "Lurch Schpellchek",
      designation: "Developer",
    },
    {
      id: 3,
      ratings: [1, 2, 3, 4],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-3.jpg',
      name: "Pelican Steve",
      designation: "UI Designer",
    },
    {
      id: 4,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-4.jpg',
      name: "Nathaneal Down",
      designation: "Supporter",
    },
    {
      id: 5,
      ratings: [1, 2, 3, 4, 5],
      desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
      user: '/assets/img/users/user-2.jpg',
      name: "Lurch Schpellchek",
      designation: "Developer",
    }
  ];

 ngOnInit(){
  new Swiper('.testimonial__slider-active-6', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: false,
		pagination: {
			el: ".testimonial-slider-dot-6",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: ".testimonial-6-button-next",
			prevEl: ".testimonial-6-button-prev",
		},
	});
 }
}
