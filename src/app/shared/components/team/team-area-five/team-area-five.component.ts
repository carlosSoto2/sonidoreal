import { Component } from '@angular/core';
import team_data from '../../../data/team-data';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';
register();

@Component({
  selector: 'app-team-area-five',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-five.component.html',
  styleUrl: './team-area-five.component.scss'
})
export class TeamAreaFiveComponent {

  public team_data = [...team_data].filter(t => t.page.includes('home_politician'));

  ngOnInit () {
    new Swiper('.team__slider-active-10', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".team-slider-dot-10",
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
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    })
  }
}
