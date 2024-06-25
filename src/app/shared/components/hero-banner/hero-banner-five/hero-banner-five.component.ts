import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-banner-five',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hero-banner-five.component.html',
  styleUrl: './hero-banner-five.component.scss'
})
export class HeroBannerFiveComponent {

}
