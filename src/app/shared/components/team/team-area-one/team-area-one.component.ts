import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import team_data from '../../../data/team-data';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-one.component.html',
  styleUrl: './team-area-one.component.scss'
})
export class TeamAreaOneComponent {

  @Input() spacing: string = 'pt-115';
  public teams = [...team_data].filter(t => t.page.includes('home_main'));

  ngOnInit(): void {
    new Swiper('.team__slider-active', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".team-slider-dot",
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        '1200': {
          slidesPerView: 4,
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
