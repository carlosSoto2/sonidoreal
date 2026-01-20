import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { CtaAreaThreeComponent } from '../../shared/components/cta/cta-area-three/cta-area-three.component';
import { RouterModule } from '@angular/router';

type IPortfolioDT = {
  id: number;
  img: string;
  tag: string;
  title: string;
  desc: string;
  category: string;
};

@Component({
  selector: 'app-portfolio-two',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent,CtaAreaThreeComponent, FooterOneComponent],
  templateUrl: './portfolio-two.component.html',
  styleUrl: './portfolio-two.component.scss'
})
export class PortfolioTwoComponent {

  public active_category = 'All';
  public portfolio_items: IPortfolioDT[] = [];

  portfolio_data: IPortfolioDT[] = [
    {
      id: 1,
      img: '/assets/img/portfolio/portfolio-1.jpg',
      tag: 'Business Consulting',
      title: '12 best blogs to follow about food design',
      desc: 'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
      category: 'Case Studies'
    },
    {
      id: 2,
      img: '/assets/img/portfolio/portfolio-2.jpg',
      tag: 'Lost Saints',
      title: 'Purpose-driven employers succeed',
      desc: 'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
      category: 'Client Stories'
    },
    {
      id: 3,
      img: '/assets/img/portfolio/portfolio-3.jpg',
      tag: 'UI wireframe',
      title: 'The 4 most effective incentives',
      desc: 'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
      category: 'Inspiration'
    },
    {
      id: 4,
      img: '/assets/img/portfolio/portfolio-7.jpg',
      tag: 'Creativity',
      title: 'Industrial Chemicals Manufacture Study',
      desc: 'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
      category: 'Case Studies'
    },
    {
      id: 5,
      img: '/assets/img/portfolio/portfolio-6.jpg',
      tag: 'Business',
      title: 'Case Study – Direct Sales Retailer',
      desc: 'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
      category: 'Digital'
    },
    {
      id: 6,
      img: '/assets/img/portfolio/portfolio-8.jpg',
      tag: 'Client Stories',
      title: 'Business Academy Consulting Client',
      desc: 'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
      category: 'Inspiration'
    },
  ]

  // handleCategoryItem
  handleCategoryItem(cate: string) {
    this.active_category = cate;
    if (cate === "All") {
      this.portfolio_items = this.portfolio_data;
    } else {
      const categoryItems = this.portfolio_data.filter(
        (item) => item.category === cate
      );
      this.portfolio_items = categoryItems;
    }
  };
  // categories
  public categories = ["All", ...new Set(this.portfolio_data.map((item) => item.category))];

  ngOnInit() {
    this.portfolio_items = this.portfolio_data;
  }
}
