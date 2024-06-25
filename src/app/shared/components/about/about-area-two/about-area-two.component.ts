import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-area-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-area-two.component.html',
  styleUrl: './about-area-two.component.scss'
})
export class AboutAreaTwoComponent {

  counter_data = [
    { num: 25, text: '+', title: 'Years Experience', subtitle: 'Over 47 projects' },
    { num: 12, text: '+', title: 'Features & Awards', subtitle: 'From design community' },
    { num: 96, text: '%', title: 'Clients Rating', subtitle: '30+ testimonials' },
  ]

}
