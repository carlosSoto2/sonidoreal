import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-hero-banner-seven',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hero-banner-seven.component.html',
  styleUrl: './hero-banner-seven.component.scss'
})
export class HeroBannerSevenComponent {


  ngOnInit() {
    let animatedItems = document.querySelectorAll('.tp_mousemove');
    if (animatedItems) {
      animatedItems.forEach((item, _) => {
        if (item instanceof HTMLElement) {
          new Parallax(item);
        }
      });
    }
  }
}
