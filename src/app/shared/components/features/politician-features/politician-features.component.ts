import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-politician-features',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './politician-features.component.html',
  styleUrl: './politician-features.component.scss'
})
export class PoliticianFeaturesComponent {

  // service data
  public service_items = [
    {
      icon: '/assets/img/features/10/features-1.png',
      sm_title: "Main Mission",
      title: "Core Principles",
      desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
    },
    {
      icon: '/assets/img/features/10/features-2.png',
      sm_title: "What We Do",
      title: "Political Program",
      desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
    },
    {
      icon: '/assets/img/features/10/features-3.png',
      sm_title: "Our Mission",
      title: "Our Members",
      desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
    },
  ]
}
