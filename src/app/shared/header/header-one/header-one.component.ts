import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { HeaderNavMenusComponent } from '../header-nav-menus/header-nav-menus.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OffcanvasOneComponent } from '../../components/offcanvas/offcanvas-one/offcanvas-one.component';
import { UtilsService } from '../../services/utils.service';
import { OffcanvasSixComponent } from '../../components/offcanvas/offcanvas-six/offcanvas-six.component';
import { SearchPopupComponent } from '../../components/search-popup/search-popup.component';


import { Contact } from '../../../core/models/contact.model';
import { ContactService } from '../../../core/services/contact.service';

import { environment } from '../../../../environments/environment';
const base_url =environment.base_url;

@Component({
  selector: 'app-header-one',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderNavMenusComponent,OffcanvasOneComponent,OffcanvasSixComponent,SearchPopupComponent],
  templateUrl: './header-one.component.html',
  styleUrl: './header-one.component.scss'
})
export class  HeaderOneComponent {

  @Input() top_bar: boolean = true;
  @Input() header_cls:string = 'header__transparent';
  @Input() bottom_cls:string = 'header__bottom-border';
  @Input() header_solid:boolean = false;
  @Input() common_offcanvas:boolean = false;
  public sticky: boolean = false;
  public openLang: boolean = false;

  public contacts: Contact;


  constructor(public utilsService:UtilsService, private router: Router, private contactService: ContactService , private activatedRoute: ActivatedRoute) {};

  ngOnInit(): void {

    this.loadContact();
  }

  // sticky nav
  @HostListener('window:scroll') onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  handleOpenLang() {
    this.openLang = !this.openLang
  }


      loadContact() {
        this.contactService.loadContact()
          .subscribe((contacts: Contact) => {
            this.contacts = contacts!;
            // console.log('servicio',this.contacts);
          });
      }

}
