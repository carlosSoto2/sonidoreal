import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import social_links from '../../data/social-data';

import { Contact } from '../../../core/models/contact.model';
import { ContactService } from '../../../core/services/contact.service';

import { environment } from '../../../../environments/environment';
const base_url =environment.base_url;


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


    public contacts: Contact;


    constructor( private router: Router, private contactService: ContactService , private activatedRoute: ActivatedRoute) {};

    ngOnInit(): void {

      this.loadContact();
    }

    loadContact() {
      this.contactService.loadContact()
        .subscribe((contacts: Contact) => {
          this.contacts = contacts!;
          // console.log('servicio',this.contacts);
        });
    }

}
