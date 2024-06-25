import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import {Gallery,GalleryItem,ImageItem,ThumbnailsPosition,ImageSize} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { ServiceAreaSevenComponent } from '../../shared/components/service/service-area-seven/service-area-seven.component';
import { PersonalPortSkillsComponent } from '../../shared/components/skills/personal-port-skills/personal-port-skills.component';
import { UtilsService } from '../../shared/services/utils.service';
import { IPortfolioDT } from '../../shared/types/portfolio-d-t';
import { BrandSliderTwoComponent } from '../../shared/components/brand/brand-slider-two/brand-slider-two.component';
import { CtaAreaSevenComponent } from '../../shared/components/cta/cta-area-seven/cta-area-seven.component';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { TestimonialElevenComponent } from '../../shared/components/testimonial/testimonial-eleven/testimonial-eleven.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderOneComponent,
    ServiceAreaSevenComponent,
    PersonalPortSkillsComponent,
    CtaAreaSevenComponent,
    BrandSliderTwoComponent,
    VideoPopupComponent,
    TestimonialElevenComponent,
    FooterSixComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  public items: GalleryItem[] | undefined;

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
    public utilsService: UtilsService
  ) {};

  public portfolio_data: IPortfolioDT[] = [
    {
      id: '1',
      img: '/assets/img/portfolio/grid/portfolio-grid-1.jpg',
      title: 'Magazine Cover',
      category: 'Apps',
    },
    {
      id: '2',
      img: '/assets/img/portfolio/grid/portfolio-grid-2.jpg',
      title: 'Logo Mockups',
      category: 'Apps',
    },
    {
      id: '3',
      img: '/assets/img/portfolio/grid/portfolio-grid-3.jpg',
      title: 'Pattern Inspired',
      category: 'Apps',
    },
    {
      id: '4',
      img: '/assets/img/portfolio/grid/portfolio-grid-4.jpg',
      title: 'Product Design',
      category: 'Branding',
    },
    {
      id: '5',
      img: '/assets/img/portfolio/grid/portfolio-grid-5.jpg',
      title: 'Branding Design',
      category: 'Branding',
    },
    {
      id: '6',
      img: '/assets/img/portfolio/grid/portfolio-grid-6.jpg',
      title: 'Original Coffee',
      category: 'Creative',
      video_id: '1gyTUHP6ne8',
    },
  ];

  ngOnInit() {
    this.items = this.portfolio_data.map(
      (item: IPortfolioDT) => new ImageItem({ src: item.img, thumb: item.img })
    );

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
