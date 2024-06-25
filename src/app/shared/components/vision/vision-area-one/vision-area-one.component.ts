import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-vision-area-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-area-one.component.html',
  styleUrl: './vision-area-one.component.scss'
})
export class VisionAreaOneComponent {

  constructor(private sanitizer: DomSanitizer) {};
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  public nav_items = [
    {id: 'environment', title: 'Environment',icon:`<svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1541 9.24927L10.6564 11.8528C10.3204 12.4266 10.6004 12.9026 11.2582 12.9026H13.0359C13.7078 12.9026 13.9737 13.3785 13.6378 13.9524L12.1541 16.5558" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.97423 23.4573V21.8337C3.75486 19.888 1.10938 16.0948 1.10938 12.0636C1.10938 5.13491 7.47813 -0.296033 14.6727 1.27166C17.8361 1.97153 20.6076 4.07112 22.0493 6.96855C24.9747 12.8474 21.8953 19.0902 17.3742 21.8197V23.4433C17.3742 23.8493 17.5282 24.7871 16.0305 24.7871H8.31797C6.77827 24.8011 6.97423 24.1992 6.97423 23.4573Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.25586 29.0002C10.4612 28.0904 13.8486 28.0904 17.054 29.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`},
    {id:'crime', title: 'Policing & crime',active:true,icon:`<svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1541 9.24927L10.6564 11.8528C10.3204 12.4266 10.6004 12.9026 11.2582 12.9026H13.0359C13.7078 12.9026 13.9737 13.3785 13.6378 13.9524L12.1541 16.5558" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.97423 23.4573V21.8337C3.75486 19.888 1.10938 16.0948 1.10938 12.0636C1.10938 5.13491 7.47813 -0.296033 14.6727 1.27166C17.8361 1.97153 20.6076 4.07112 22.0493 6.96855C24.9747 12.8474 21.8953 19.0902 17.3742 21.8197V23.4433C17.3742 23.8493 17.5282 24.7871 16.0305 24.7871H8.31797C6.77827 24.8011 6.97423 24.1992 6.97423 23.4573Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.25586 29.0002C10.4612 28.0904 13.8486 28.0904 17.054 29.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`},
    {id:'land', title: 'Housing & land',icon:`<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4371 1.07534L25.0735 5.59559C25.4871 5.77138 25.818 6.29874 25.818 6.76332V10.932C25.818 11.6226 25.2862 12.1877 24.6362 12.1877H3.36346C2.71346 12.1877 2.18164 11.6226 2.18164 10.932V6.76332C2.18164 6.29874 2.51256 5.77138 2.92619 5.59559L13.5626 1.07534C13.7989 0.974887 14.2007 0.974887 14.4371 1.07534Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M25.818 26.0003H2.18164V22.2334C2.18164 21.5428 2.71346 20.9778 3.36346 20.9778H24.6362C25.2862 20.9778 25.818 21.5428 25.818 22.2334V26.0003Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.54688 20.9774V12.188" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.27344 20.9774V12.188" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 20.9774V12.188" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.7266 20.9774V12.188" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.4531 20.9774V12.188" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 25.9995H27" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.9993 9.04889C14.9783 9.04889 15.772 8.20564 15.772 7.16543C15.772 6.12523 14.9783 5.28198 13.9993 5.28198C13.0202 5.28198 12.2266 6.12523 12.2266 7.16543C12.2266 8.20564 13.0202 9.04889 13.9993 9.04889Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`},
    {id:'education', title: 'Education',icon:`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 19.0964V3.58072C25 2.03814 23.824 0.894065 22.396 1.02261H22.324C19.804 1.254 15.976 2.62946 13.84 4.0692L13.636 4.2106C13.288 4.44199 12.712 4.44199 12.364 4.2106L12.064 4.01778C9.928 2.5909 6.112 1.22829 3.592 1.00976C2.164 0.88121 1 2.03814 1 3.56786V19.0964C1 20.3305 1.936 21.4874 3.088 21.6417L3.436 21.6931C6.04 22.0659 10.06 23.4799 12.364 24.8297L12.412 24.8554C12.736 25.0482 13.252 25.0482 13.564 24.8554C15.868 23.4928 19.9 22.0659 22.516 21.6931L22.912 21.6417C24.064 21.4874 25 20.3305 25 19.0964Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 4.63623V23.9184" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.89922 8.49219H5.19922" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.79922 12.3481H5.19922" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`},
    {id:'law', title: 'Social & Law',icon:`<svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.1406 23.5244L18.2305 16.6143" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.2336 16.6141L13.2918 21.5559C12.2029 22.6448 10.43 22.6448 9.34112 21.5559L3.42212 15.6369C2.33325 14.5481 2.33325 12.7752 3.42212 11.6863L13.2918 1.81665C14.3806 0.727782 16.1535 0.727782 17.2424 1.81665L23.1614 7.73567C24.2503 8.82454 24.2503 10.5974 23.1614 11.6863L18.2336 16.6141Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 27H9.37593" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.36719 8.7417L16.2368 18.6113" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`},
  ]

  public tab_items = [
    {id:'environment',img:'/assets/img/vision/vision-1.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'crime',img:'/assets/img/vision/vision-2.jpg',show:true,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'land',img:'/assets/img/vision/vision-3.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'education',img:'/assets/img/vision/vision-4.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
    {id:'law',img:'/assets/img/vision/vision-5.jpg',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur numquam magnam, sed perspiciatis mollitia nesciunt amet, consequuntur error culpa nobis dolore asperiores eum non quasi duis cursus, mi quis viverra ornare, eros dolor interdum nulla, commodo diam libero.'},
  ]
}
