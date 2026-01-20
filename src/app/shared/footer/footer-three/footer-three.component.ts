import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import social_links from '../../data/social-data';

@Component({
  selector: 'app-footer-three',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-three.component.html',
  styleUrl: './footer-three.component.scss'
})
export class FooterThreeComponent {
  public date = new Date().getFullYear();
  public socials = social_links;
}
