import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './portfolio-area-one.component.html',
  styleUrl: './portfolio-area-one.component.scss'
})
export class PortfolioAreaOneComponent {

  @Input() style_2: boolean = false;

  portfolio_items = [
    {
      id: 1,
      bg: '/assets/img/portfolio/portfolio-1.jpg',
      tag: "Business Consulting",
      title: "12 best blogs to follow about food design",
      text: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
    },
    {
      id: 2,
      bg: '/assets/img/portfolio/portfolio-2.jpg',
      tag: "Lost Saints",
      title: "Purpose-driven employers succeed",
      text: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
    },
    {
      id: 3,
      bg: '/assets/img/portfolio/portfolio-3.jpg',
      tag: "UI wireframe",
      title: "The 4 most effective incentives",
      text: "Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.",
    },
  ]
}
