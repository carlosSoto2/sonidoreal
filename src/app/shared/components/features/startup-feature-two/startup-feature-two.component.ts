import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-startup-feature-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './startup-feature-two.component.html',
  styleUrl: './startup-feature-two.component.scss'
})
export class StartupFeatureTwoComponent {

  constructor(private sanitizer: DomSanitizer) {}
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  public feature_nav_items = [
    {
      id:'customer',
      title:'Customer Discovery',
      active:true,
      icon:`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.6264 10.1916L22.4986 15.0314C21.5319 19.2112 19.6216 20.9017 16.0312 20.5543C15.4558 20.508 14.8344 20.4038 14.1669 20.2417L12.2336 19.7785C7.43486 18.6323 5.95035 16.2471 7.07811 11.4073L8.20588 6.55597C8.43604 5.5718 8.71223 4.71499 9.05746 4.00871C10.4039 1.20673 12.6939 0.454127 16.5375 1.36882L18.4594 1.82038C23.2811 2.95507 24.7541 5.35181 23.6264 10.1916Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M16.0317 20.5544C15.3182 21.0407 14.4206 21.4459 13.3273 21.8049L11.5091 22.4069C6.94049 23.889 4.53536 22.6501 3.05085 18.0534L1.57785 13.48C0.104844 8.88331 1.32467 6.45184 5.89328 4.9698L7.71152 4.36772C8.18334 4.2172 8.63214 4.08984 9.05793 4.00879C8.7127 4.71507 8.43651 5.57188 8.20635 6.55605L7.07859 11.4074C5.95082 16.2472 7.43533 18.6324 12.2341 19.7786L14.1674 20.2418C14.8349 20.4039 15.4563 20.5081 16.0317 20.5544Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.2471 7.97949L18.8284 9.40364" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.1191 12.4609L15.4564 13.3177" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      id:'ideation',
      title:'Ideation',
      active:false,
      icon:`<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.67754 7.48193L8.50078 9.52752C8.23683 9.97842 8.45679 10.3523 8.97368 10.3523H10.3704C10.8983 10.3523 11.1072 10.7263 10.8433 11.1772L9.67754 13.2228" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.60806 18.6449V17.3691C3.07858 15.8405 1 12.8601 1 9.69272C1 4.24883 6.00398 -0.0183023 11.6568 1.21345C14.1423 1.76333 16.3199 3.413 17.4526 5.68953C19.7512 10.3086 17.3317 15.2136 13.7794 17.3582V18.6339C13.7794 18.9528 13.9004 19.6897 12.7236 19.6897H6.66384C5.45409 19.7007 5.60806 19.2278 5.60806 18.6449Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.4" d="M5.82812 23C8.34661 22.2852 11.0081 22.2852 13.5266 23" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     </svg> `,
    },
    {
      id:'multiple',
      title:'Software Development',
      active:false,
      icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0122 1.25636L20.1732 5.12657C21.0092 5.57864 21.0092 6.86871 20.1732 7.32079L13.0122 11.191C12.3742 11.5328 11.6262 11.5328 10.9882 11.191L3.8272 7.32079C2.9912 6.86871 2.9912 5.57864 3.8272 5.12657L10.9882 1.25636C11.6262 0.914547 12.3742 0.914547 13.0122 1.25636Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.4" d="M2.771 9.93398L9.426 13.2749C10.251 13.6939 10.779 14.5429 10.779 15.4692V21.7762C10.779 22.6913 9.822 23.2757 9.008 22.8678L2.353 19.5268C1.528 19.1078 1 18.2588 1 17.3326V11.0256C1 10.1104 1.957 9.52601 2.771 9.93398Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.2287 9.93398L14.5737 13.2749C13.7487 13.6939 13.2207 14.5429 13.2207 15.4692V21.7762C13.2207 22.6913 14.1777 23.2757 14.9917 22.8678L21.6467 19.5268C22.4717 19.1078 22.9997 18.2588 22.9997 17.3326V11.0256C22.9997 10.1104 22.0427 9.52601 21.2287 9.93398Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>`,
    },
    {
      id:'software',
      title:'Customer Discovery',
      active:false,
      icon:` <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7H7V15H15V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 21C5.65 21 7 19.65 7 18V15H4C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 7H7V4C7 2.35 5.65 1 4 1C2.35 1 1 2.35 1 4C1 5.65 2.35 7 4 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 7H18C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path opacity="0.4" d="M18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15H15V18C15 19.65 16.35 21 18 21Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>  `,
    },
  ]

  public feature_tab_items = [
    {
      id:'customer',
      active:true,
      images:[
        '/assets/img/features/7/features-img-1.png',
        '/assets/img/features/7/features-img-2.png',
        '/assets/img/features/7/features-img-3.png',
      ]
    },
    {
      id:'ideation',
      active:false,
      images:[
        '/assets/img/features/7/features-img-1.png',
        '/assets/img/features/7/features-img-2.png',
        '/assets/img/features/7/features-img-3.png',
      ]
    },
    {
      id:'multiple',
      active:false,
      images:[
        '/assets/img/features/7/features-img-1.png',
        '/assets/img/features/7/features-img-2.png',
        '/assets/img/features/7/features-img-3.png',
      ]
    },
    {
      id:'software',
      active:false,
      images:[
        '/assets/img/features/7/features-img-1.png',
        '/assets/img/features/7/features-img-2.png',
        '/assets/img/features/7/features-img-3.png',
      ]
    }
  ]
}
