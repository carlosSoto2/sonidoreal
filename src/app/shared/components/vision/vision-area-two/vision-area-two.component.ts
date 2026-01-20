import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-vision-area-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-area-two.component.html',
  styleUrl: './vision-area-two.component.scss'
})
export class VisionAreaTwoComponent {

  constructor(private sanitizer: DomSanitizer) {};
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  public nav_items = [
    {id: 'environment', title: 'Mobile App',icon:`<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 7V19C21 23.8 19.75 25 14.75 25H7.25C2.25 25 1 23.8 1 19V7C1 2.2 2.25 1 7.25 1H14.75C19.75 1 21 2.2 21 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M13.5117 5.20044H8.51172" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M10.9961 21.5196C12.0661 21.5196 12.9336 20.6868 12.9336 19.6596C12.9336 18.6323 12.0661 17.7996 10.9961 17.7996C9.92604 17.7996 9.05859 18.6323 9.05859 19.6596C9.05859 20.6868 9.92604 21.5196 10.9961 21.5196Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>`},
    {id:'crime', title: 'Speed Optimized',active:true,icon:`<svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2222 1L1 15.6667H12L10.7778 25.4444L23 10.7778H12L13.2222 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>`},
    {id:'land', title: 'No Skills Needed',icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M19.6906 7.6C21.5132 7.6 22.9906 6.12254 22.9906 4.3C22.9906 2.47746 21.5132 1 19.6906 1C17.8681 1 16.3906 2.47746 16.3906 4.3C16.3906 6.12254 17.8681 7.6 19.6906 7.6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M6.5 13.1006H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M6.5 17.5H16.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.2 1H8.7C3.2 1 1 3.2 1 8.7V15.3C1 20.8 3.2 23 8.7 23H15.3C20.8 23 23 20.8 23 15.3V9.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>`},
    {id:'education', title: 'Google Analytics',icon:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M19.5202 11.652C22.4709 11.652 23.6966 10.5171 22.6071 6.79468C21.8694 4.28656 19.7131 2.13026 17.205 1.39258C13.4826 0.303087 12.3477 1.52877 12.3477 4.47949V7.74799C12.3477 10.5171 13.4825 11.652 15.7523 11.652H19.5202Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.4297 14.7162C20.3742 19.9708 15.3353 23.784 9.60407 22.8534C5.30283 22.1611 1.8414 18.6997 1.13777 14.3985C0.218507 8.68995 4.00905 3.65103 9.24091 2.58423" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>`},
    {id:'law', title: 'Pixel Perfect',icon:`<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 18V4C23 2 21.8387 1 19.516 1H14.8707C12.548 1 11.3867 2 11.3867 4V18C11.3867 20 12.548 21 14.8707 21H19.516C21.8387 21 23 20 23 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.4" d="M11.3867 5H17.1934" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.4" d="M11.3867 17H16.032" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.4" d="M11.3867 12.95L17.1934 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.4" d="M11.3867 9H14.8707" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M4.43754 1C2.54457 1 1 2.33 1 3.95V16.91C1 17.36 1.22065 18.04 1.48776 18.43L2.44005 19.79C3.5317 21.36 5.33176 21.36 6.42342 19.79L7.37571 18.43C7.64281 18.04 7.86346 17.36 7.86346 16.91V3.95C7.86346 2.33 6.31889 1 4.43754 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.4" d="M7.86346 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
 </svg>`},
  ]

  public tab_items = [
    {id:'environment',img:'/assets/img/vision/2/vision-1.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'crime',img:'/assets/img/vision/2/vision-2.jpg',show:true,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'land',img:'/assets/img/vision/2/vision-3.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'education',img:'/assets/img/vision/2/vision-4.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'law',img:'/assets/img/vision/2/vision-5.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
  ]
}
