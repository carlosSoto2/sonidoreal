import { Component } from '@angular/core';
import social_links from '../../data/social-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-seven',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-seven.component.html',
  styleUrl: './footer-seven.component.scss'
})
export class FooterSevenComponent {

  public date = new Date().getFullYear();
  public socials = social_links;
}
