import { Component } from '@angular/core';
import social_links from '../../data/social-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-eleven',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-eleven.component.html',
  styleUrl: './footer-eleven.component.scss'
})
export class FooterElevenComponent {

  public date = new Date().getFullYear();
  public socials = social_links;
}
