import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { UtilsService } from '../../shared/services/utils.service';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { IPortfolioDT } from '../../shared/types/portfolio-d-t';


@Component({
  selector: 'app-portfolio-classic',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent,VideoPopupComponent, FooterOneComponent],
  templateUrl: './portfolio-classic.component.html',
  styleUrl: './portfolio-classic.component.scss'
})
export class PortfolioClassicComponent {
  public activeCategory = 'All';
  public perView: number = 6;
  public portfolio_items: IPortfolioDT[] = [];

  public items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox,public utilsService: UtilsService) { };

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
        img: '/assets/img/portfolio/grid/portfolio-grid-1.jpg',
        title: 'Magazine Cover',
        category: 'Apps'
      },
      {
        id: '2',
        img: '/assets/img/portfolio/grid/portfolio-grid-2.jpg',
        title: 'Logo Mockups',
        category: 'Apps'
      },
      {
        id: '3',
        img: '/assets/img/portfolio/grid/portfolio-grid-3.jpg',
        title: 'Pattern Inspired',
        category: 'Apps'
      },
      // BRANDING
      {
        id: '4',
        img: '/assets/img/portfolio/grid/portfolio-grid-4.jpg',
        title: 'Product Design',
        category: 'Branding'
      },
      {
        id: '5',
        img: '/assets/img/portfolio/grid/portfolio-grid-5.jpg',
        title: 'Branding Design',
        category: 'Branding'
      },
      //  Creative
      {
        id: '6',
        img: '/assets/img/portfolio/grid/portfolio-grid-6.jpg',
        title: 'Original Coffee',
        category: 'Creative',
        video_id: '1gyTUHP6ne8',
      },
      {
        id: '7',
        img: '/assets/img/portfolio/grid/portfolio-grid-7.jpg',
        title: 'Visual Identity',
        category: 'Creative'
      },
      {
        id: '8',
        img: '/assets/img/portfolio/grid/portfolio-grid-8.jpg',
        title: 'UX Web Design',
        category: 'Creative',
        video_id: 'ty8Y0hCJIYw',
      },
      {
        id: '9',
        img: '/assets/img/portfolio/grid/portfolio-grid-9.jpg',
        title: 'Magazine Cover',
        category: 'Creative'
      },
      // Packaging
      {
        id: '10',
        img: '/assets/img/portfolio/grid/portfolio-grid-10.jpg',
        title: 'Visual Identity',
        category: 'Packaging'
      },
      {
        id: '11',
        img: '/assets/img/portfolio/grid/portfolio-grid-11.jpg',
        title: 'UX Web Design',
        category: 'Packaging',
        video_id: 'Xm2VKy2a6aQ',
      },
      // Mockup
      {
        id: '12',
        img: '/assets/img/portfolio/grid/portfolio-grid-12.jpg',
        title: 'Magazine Cover',
        category: 'Mockup'
      },
    ];

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
  };

   // handle per view
   handlePerView() {
    this.perView = this.perView + 3;
  }

  ngOnInit() {
    this.portfolio_items = this.portfolio_data;
    this.items = this.portfolio_items.map((item: IPortfolioDT) => new ImageItem({ src: item.img, thumb: item.img }));

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

}
