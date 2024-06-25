import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-banner-four',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './hero-banner-four.component.html',
  styleUrl: './hero-banner-four.component.scss'
})
export class HeroBannerFourComponent {

}
