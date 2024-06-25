import { Component } from '@angular/core';
import social_links from '../../data/social-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-nine',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-nine.component.html',
  styleUrl: './footer-nine.component.scss'
})
export class FooterNineComponent {

  public date = new Date().getFullYear();
  public socials = social_links;
}
