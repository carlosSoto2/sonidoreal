import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import blog_data from '../../../data/blog-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { VideoPopupComponent } from '../../modal/video-popup/video-popup.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-blog-area-six',
  standalone: true,
  imports: [CommonModule,RouterModule,VideoPopupComponent],
  templateUrl: './blog-area-six.component.html',
  styleUrl: './blog-area-six.component.scss'
})
export class BlogAreaSixComponent {

  constructor(private sanitizer: DomSanitizer,public utilsService:UtilsService) {}
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
  public blog_items = [...blog_data].filter(b => b.page === 'home_creative');
}
