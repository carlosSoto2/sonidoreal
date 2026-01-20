import { Component } from '@angular/core';
import social_links from '../../data/social-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-eight',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-eight.component.html',
  styleUrl: './footer-eight.component.scss'
})
export class FooterEightComponent {

  public date = new Date().getFullYear();
  public socials = social_links;
}
