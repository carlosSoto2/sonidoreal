import { Component,ElementRef,Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBlogDT } from '../../../types/blog-d-t';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-blog-postbox-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-postbox-item.component.html',
  styleUrl: './blog-postbox-item.component.scss'
})
export class BlogPostboxItemComponent {

  @Input() blog!: IBlogDT;

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;


  constructor(
    public utilsService: UtilsService,
  ) { };

  ngAfterViewInit() {
    if (this.swiperContainer) {
      this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 3000,
        },
      });
    }
  }
}
