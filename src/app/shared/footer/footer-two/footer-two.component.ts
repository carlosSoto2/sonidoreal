import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import social_links from '../../data/social-data';

@Component({
  selector: 'app-footer-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-two.component.html',
  styleUrl: './footer-two.component.scss'
})
export class FooterTwoComponent {
  public date = new Date().getFullYear();
  public socials = social_links;
}
