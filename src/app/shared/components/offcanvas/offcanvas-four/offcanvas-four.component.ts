import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileMenusComponent } from '../mobile-menus/mobile-menus.component';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offcanvas-four',
  standalone: true,
  imports: [CommonModule,RouterModule,MobileMenusComponent],
  templateUrl: './offcanvas-four.component.html',
  styleUrl: './offcanvas-four.component.scss'
})
export class OffcanvasFourComponent {

  constructor(public utilsService:UtilsService) {};

  instagram_images =[
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/offcanvas/instagram-1.png'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/offcanvas/instagram-2.png'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/offcanvas/instagram-3.png'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/offcanvas/instagram-4.png'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/offcanvas/instagram-5.png'},
    {link:'https://www.instagram.com/',img:'/assets/img/instagram/offcanvas/instagram-6.png'},
  ]
}
