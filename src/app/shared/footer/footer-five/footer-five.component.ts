import { Component } from '@angular/core';
import social_links from '../../data/social-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-five',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-five.component.html',
  styleUrl: './footer-five.component.scss'
})
export class FooterFiveComponent {

  public date = new Date().getFullYear();
  public socials = social_links;
}
