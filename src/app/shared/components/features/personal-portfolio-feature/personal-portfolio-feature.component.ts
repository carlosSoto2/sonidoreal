import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-portfolio-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-portfolio-feature.component.html',
  styleUrl: './personal-portfolio-feature.component.scss',
})
export class PersonalPortfolioFeatureComponent {

  public serviceActive = 'features-img-1';

  handleServiceActive (id:number) {
    this.serviceActive = `features-img-${id}`;
  }

  // feature content
  feature_contents = [
    { id: 1, subtitle: 'Strategy', title: 'Concept' },
    { id: 2, subtitle: 'Analysis', title: 'Research' },
    { id: 3, subtitle: 'Development', title: 'Design' },
    { id: 4, subtitle: 'Prototyping', title: 'Animation' },
  ];

  feature_thumbs = [
    { ref: 'features-img-1', img: '/assets/img/features/9/features-1.jpg' },
    { ref: 'features-img-2', img: '/assets/img/features/9/features-2.jpg' },
    { ref: 'features-img-3', img: '/assets/img/features/9/features-3.jpg' },
    { ref: 'features-img-4', img: '/assets/img/features/9/features-4.jpg' },
  ];
}
