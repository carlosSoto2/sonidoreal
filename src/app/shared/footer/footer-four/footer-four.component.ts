import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import social_links from '../../data/social-data';

@Component({
  selector: 'app-footer-four',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-four.component.html',
  styleUrl: './footer-four.component.scss'
})
export class FooterFourComponent {

  @Input() style_2: boolean = false;
  public date = new Date().getFullYear();
  public socials = social_links;
}
