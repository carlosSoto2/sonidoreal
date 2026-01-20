import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import social_links from '../../data/social-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-six',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer-six.component.html',
  styleUrl: './footer-six.component.scss'
})
export class FooterSixComponent {

  @Input() style_2: boolean = false;
  public date = new Date().getFullYear();
  public socials = social_links;
  public openLang: boolean = false;

  handleOpenLang() {
    this.openLang = !this.openLang
  }
}
