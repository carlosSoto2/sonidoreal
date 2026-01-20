import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { UtilsService } from '../../shared/services/utils.service';
import { RouterModule } from '@angular/router';

// portfolio data type
type IPortfolioDT = {
  id: string;
  img: string;
  title: string;
  category: string;
  isBig?: boolean;
}

@Component({
  selector: 'app-portfolio-masonry',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent, FooterOneComponent],
  templateUrl: './portfolio-masonry.component.html',
  styleUrl: './portfolio-masonry.component.scss'
})
export class PortfolioMasonryComponent {

  public activeCategory = 'All';
  public perView: number = 8;
  public portfolio_items: IPortfolioDT[] = [];

  constructor(public utilsService: UtilsService) { };

  getFilteredPortfolioCount(category: string): number {
    if (category === 'All') {
      return this.portfolio_data.length;
    } else {
      return this.portfolio_data.filter(item => item.category === category).length;
    }
  }

  public portfolio_data: IPortfolioDT[] = [
    // APPS
    {
      id: '1',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-1.jpg',
      title: 'Magazine Cover',
      category: 'Apps'
    },
    {
      id: '2',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-2.jpg',
      title: 'Logo Mockups',
      category: 'Apps'
    },
    {
      id: '3',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-3.jpg',
      title: 'Pattern Inspired',
      category: 'Apps'
    },
    // BRANDING
    {
      id: '4',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-4.jpg',
      title: 'Product Design',
      category: 'Branding'
    },
    {
      id: '5',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-5.jpg',
      title: 'Branding Design',
      category: 'Branding'
    },
    //  Creative
    {
      id: '6',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-6.jpg',
      title: 'Original Coffee',
      category: 'Creative',
    },
    {
      id: '7',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-8.jpg',
      title: 'Visual Identity',
      category: 'Creative'
    },
    {
      id: '8',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-7.jpg',
      title: 'UX Web Design',
      category: 'Creative',
    },
    {
      id: '9',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-9.jpg',
      title: 'Magazine Cover',
      category: 'Creative'
    },
    // Packaging
    {
      id: '10',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-10.jpg',
      title: 'Visual Identity',
      category: 'Packaging',
      isBig: true
    },
    {
      id: '11',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-11.jpg',
      title: 'UX Web Design',
      category: 'Packaging',
    },
    // Mockup
    {
      id: '12',
      img: '/assets/img/portfolio/masonary/portfolio-masonary-12.jpg',
      title: 'Magazine Cover',
      category: 'Mockup'
    },
  ]

  categories = [
    "All",
    ...new Set(this.portfolio_data.map((item) => item.category)),
  ];

  handleCategoryItem(cate: string) {
    this.activeCategory = cate;
    if (cate === "All") {
      this.portfolio_items = this.portfolio_data;
    } else {
      const categoryItems = this.portfolio_data.filter(
        (item) => item.category === cate
      );
      this.portfolio_items = categoryItems;
    }
    this.updateIsotopeLayout();
  };

  ngOnInit() {
    this.portfolio_items = this.portfolio_data;
  }

  handlePerView() {
    this.perView += 3;
    this.updateIsotopeLayout();
  }

  ngAfterViewInit(): void {
    this.updateIsotopeLayout();
  }

  updateIsotopeLayout() {
    setTimeout(() => {
      const grid = document.querySelector('.isotopeContainer');
      new (<any>window).Isotope(grid, {
        itemSelector: '.grid-item'
      });
    }, 800);
  }
}
