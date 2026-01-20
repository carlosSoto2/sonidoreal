import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-three.component.html',
  styleUrl: './brand-three.component.scss'
})
export class BrandThreeComponent {

  public brands = [
    '/assets/img/brand/3/brand-1.png',
    '/assets/img/brand/3/brand-2.png',
    '/assets/img/brand/3/brand-3.png',
    '/assets/img/brand/3/brand-4.png',
    '/assets/img/brand/3/brand-5.png',
    '/assets/img/brand/3/brand-6.png',
    '/assets/img/brand/3/brand-7.png',
    '/assets/img/brand/3/brand-8.png',
  ]
}
