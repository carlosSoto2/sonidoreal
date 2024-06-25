import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-banner-three',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hero-banner-three.component.html',
  styleUrl: './hero-banner-three.component.scss'
})
export class HeroBannerThreeComponent {

}
