import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import social_links from '../../data/social-data';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-ten',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-ten.component.html',
  styleUrl: './footer-ten.component.scss'
})
export class FooterTenComponent {

  public date = new Date().getFullYear();
  public socials = social_links;

  public items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  public gallery_images = [
    '/assets/img/instagram/footer/insta-1.jpg',
    '/assets/img/instagram/footer/insta-2.jpg',
    '/assets/img/instagram/footer/insta-3.jpg',
    '/assets/img/instagram/footer/insta-4.jpg',
    '/assets/img/instagram/footer/insta-5.jpg',
    '/assets/img/instagram/footer/insta-6.jpg',
  ]

  ngOnInit () {

    this.items = this.gallery_images.map(img => new ImageItem({ src: img, thumb: img }));

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
