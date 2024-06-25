import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import social_links from '../../data/social-data';

@Component({
  selector: 'app-footer-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-one.component.html',
  styleUrl: './footer-one.component.scss'
})
export class FooterOneComponent {
  public date = new Date().getFullYear();
  public socials = social_links;
}
