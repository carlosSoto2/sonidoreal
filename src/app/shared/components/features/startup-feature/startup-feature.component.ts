import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-startup-feature',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './startup-feature.component.html',
  styleUrl: './startup-feature.component.scss'
})
export class StartupFeatureComponent {

  public feature_data = [
    {
      icon:'/assets/img/features/7/features-icon-1.png',
      title:'Manage Expenses',
      desc:'Build an online store that rank higher & sell more and integrates easily.'
    },
    {
      icon:'/assets/img/features/7/features-icon-2.png',
      title:'Responsive any device',
      desc:'Build an online store that rank higher & sell more and integrates easily.'
    },
    {
      icon:'/assets/img/features/7/features-icon-3.png',
      title:'World-class support',
      desc:'Build an online store that rank higher & sell more and integrates easily.'
    }
  ]
}
