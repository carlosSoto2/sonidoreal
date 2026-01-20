import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-banner-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hero-banner-two.component.html',
  styleUrl: './hero-banner-two.component.scss'
})
export class HeroBannerTwoComponent {

}
