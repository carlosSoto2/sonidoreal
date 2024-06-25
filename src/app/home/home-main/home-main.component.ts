import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { HeroBannerOneComponent } from '../../shared/components/hero-banner/hero-banner-one/hero-banner-one.component';
import { AboutAreaOneComponent } from '../../shared/components/about/about-area-one/about-area-one.component';
import { CounterAreaOneComponent } from '../../shared/components/counter/counter-area-one/counter-area-one.component';
import { ServiceAreaOneComponent } from '../../shared/components/service/service-area-one/service-area-one.component';
import { EventAreaOneComponent } from '../../shared/components/events/event-area-one/event-area-one.component';
import { TeamAreaOneComponent } from '../../shared/components/team/team-area-one/team-area-one.component';
import { FaqAreaOneComponent } from '../../shared/components/faq/faq-area-one/faq-area-one.component';
import { PortfolioAreaOneComponent } from '../../shared/components/portfolio/portfolio-area-one/portfolio-area-one.component';
import { TestimonialOneComponent } from '../../shared/components/testimonial/testimonial-one/testimonial-one.component';
import { BlogAreaOneComponent } from '../../shared/components/blog/blog-area-one/blog-area-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';


@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [
    CommonModule,
    HeaderOneComponent,
    HeroBannerOneComponent,
    AboutAreaOneComponent,
    CounterAreaOneComponent,
    ServiceAreaOneComponent,
    EventAreaOneComponent,
    TeamAreaOneComponent,
    FaqAreaOneComponent,
    PortfolioAreaOneComponent,
    TestimonialOneComponent,
    BlogAreaOneComponent,
    FooterOneComponent,
  ],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
