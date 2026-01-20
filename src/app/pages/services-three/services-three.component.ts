import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { CtaAreaThreeComponent } from '../../shared/components/cta/cta-area-three/cta-area-three.component';
import { UtilsService } from '../../shared/services/utils.service';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import sal from 'sal.js';
import { TestimonialTwelveComponent } from '../../shared/components/testimonial/testimonial-twelve/testimonial-twelve.component';
import { BrandSliderTwoComponent } from '../../shared/components/brand/brand-slider-two/brand-slider-two.component';
import { CommonFaqComponent } from '../../shared/components/faq/common-faq/common-faq.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-three',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,CtaAreaThreeComponent,TestimonialTwelveComponent,BrandSliderTwoComponent,CommonFaqComponent,VideoPopupComponent,FooterSixComponent],
  templateUrl: './services-three.component.html',
  styleUrl: './services-three.component.scss'
})
export class ServicesThreeComponent {

  constructor(public utilsService: UtilsService,private sanitizer: DomSanitizer) {};

  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  feature_data = [
    {
      icon:`<svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.40418 31.3194L13.5607 39.4281C19.2892 45.1229 21.2458 45.0292 26.9035 39.4281L40.0341 26.3745C44.6074 21.8281 45.7626 18.8049 40.0341 13.1101L31.8776 5.00139C25.772 -1.0684 23.1081 0.454904 18.5348 5.00139L5.40418 18.0549C-0.229959 23.6795 -0.701435 25.2496 5.40418 31.3194Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M41.7841 34.2018L40.2282 36.7562C38.0358 40.3887 39.7331 43.365 44 43.365C48.2669 43.365 49.9642 40.3887 47.7718 36.7562L46.2159 34.2018C44.9901 32.1863 42.9863 32.1863 41.7841 34.2018Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.23438 23.5386C14.3414 19.9999 28.1557 19.8827 41.3099 23.234L42.4886 23.5386" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      title:'Build your shop',
      subtitle:'Build a website that loads fast for the highest user experience.'
    },
    {
      icon:`<svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path  d="M24.1672 38.0499H10.2625C3.31012 38.0499 1 33.4297 1 28.7874V10.2625C1 3.31012 3.31012 1 10.2625 1H24.1672C31.1196 1 33.4297 3.31012 33.4297 10.2625V28.7874C33.4297 35.7398 31.0975 38.0499 24.1672 38.0499Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M39.5421 30.7456L33.4258 26.4554V12.5727L39.5421 8.28245C42.5343 6.19234 44.9984 7.46841 44.9984 11.1426V27.9075C44.9984 31.5817 42.5343 32.8577 39.5421 30.7456Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M21.8939 17.3248C23.7166 17.3248 25.1941 15.8473 25.1941 14.0247C25.1941 12.202 23.7166 10.7245 21.8939 10.7245C20.0713 10.7245 18.5938 12.202 18.5938 14.0247C18.5938 15.8473 20.0713 17.3248 21.8939 17.3248Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,
      title:'Video Tutorials',
      subtitle:'Build a website that loads fast for the highest user experience.'
    },
    {
      icon:`<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.9844 13C38.2981 13 40.9844 10.3137 40.9844 7C40.9844 3.68629 38.2981 1 34.9844 1C31.6707 1 28.9844 3.68629 28.9844 7C28.9844 10.3137 31.6707 13 34.9844 13Z"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11 23.001H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M11 31H29" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M25 1H15C5 1 1 5 1 15V27C1 37 5 41 15 41H27C37 41 41 37 41 27V17" stroke="currentColor"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>`,
      title:'Speed Optimized',
      subtitle:'Build a website that loads fast for the highest user experience.'
    },
  ];

  services_data = [
    {
      icon: `<svg width="36" height="45" viewBox="0 0 36 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 11.5306V32.5917C35 41.0161 32.875 43.1222 24.375 43.1222H11.625C3.125 43.1222 1 41.0161 1 32.5917V11.5306C1 3.10611 3.125 1 11.625 1H24.375C32.875 1 35 3.10611 35 11.5306Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M22.2656 8.37244H13.7656" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M17.993 37.0134C19.8121 37.0134 21.2867 35.5519 21.2867 33.749C21.2867 31.9461 19.8121 30.4845 17.993 30.4845C16.1739 30.4845 14.6992 31.9461 14.6992 33.749C14.6992 35.5519 16.1739 37.0134 17.993 37.0134Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      title: 'Responsive Design',
      subtitle: 'There are many variations of passages of <br> lorem Ipsum available.!'
    },
    {
      icon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.18913 32.5H34.7881C38.7781 32.5 40.8781 30.4 40.8781 26.41V1H3.07812V26.41C3.09913 30.4 5.19913 32.5 9.18913 32.5Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1H43" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.6016 43L22.0016 38.8M22.0016 38.8V32.5M22.0016 38.8L30.4016 43" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M12.5469 19.9001L19.1619 14.3771C19.6869 13.9361 20.3799 14.0621 20.7369 14.6501L23.2569 18.8501C23.6139 19.4381 24.3069 19.5431 24.8319 19.1231L31.4469 13.6001" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      title: 'SEO Optimized',
      subtitle: 'There are many variations of passages of <br> lorem Ipsum available.!'
    },
    {
      icon: `<svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.9633 10.0419L34.5296 35.872C34.0714 37.8002 32.3533 39.1365 30.3678 39.1365H5.28222C2.39948 39.1365 0.337686 36.3109 1.19678 33.5427L9.23407 7.73192C9.78771 5.93737 11.4487 4.69629 13.3196 4.69629H36.8015C38.6151 4.69629 40.1233 5.80358 40.7533 7.33085C41.116 8.15177 41.1924 9.08731 40.9633 10.0419Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/>
                  <path opacity="0.4" d="M29.6445 39.1365H38.77C41.2328 39.1365 43.1609 37.0556 42.9891 34.5929L41.0991 8.59094" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.5781 9.31629L19.5636 1.06909" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M30.3672 9.33547L32.1617 1.05005" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M13.7969 20.0457H29.0697" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M11.8906 27.6816H27.1634" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      title: 'Daily Updates',
      subtitle: 'There are many variations of passages of <br> lorem Ipsum available.!'
    },
    {
      icon: `<svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.9358 30.66L34.7158 36.98C34.9158 38.64 33.1358 39.7999 31.7158 38.9399L23.3358 33.96C22.4158 33.96 21.5158 33.9 20.6358 33.78C22.1158 32.04 22.9958 29.84 22.9958 27.46C22.9958 21.78 18.0758 17.1801 11.9958 17.1801C9.67579 17.1801 7.5358 17.84 5.7558 19C5.6958 18.5 5.67578 18 5.67578 17.48C5.67578 8.37998 13.5758 1 23.3358 1C33.0958 1 40.9958 8.37998 40.9958 17.48C40.9958 22.88 38.2158 27.66 33.9358 30.66Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M23 27.4601C23 29.8401 22.12 32.0402 20.64 33.7802C18.66 36.1802 15.52 37.7201 12 37.7201L6.78 40.8201C5.9 41.3601 4.77999 40.6201 4.89999 39.6001L5.39999 35.6602C2.71999 33.8002 1 30.8201 1 27.4601C1 23.9401 2.88001 20.8401 5.76001 19.0001C7.54001 17.8401 9.68 17.1802 12 17.1802C18.08 17.1802 23 21.7801 23 27.4601Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      title: 'Fast Support',
      subtitle: 'There are many variations of passages of <br> lorem Ipsum available.!'
    },
  ]

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
