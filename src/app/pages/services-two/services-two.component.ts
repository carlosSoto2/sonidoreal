import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-two',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent,FooterSixComponent],
  templateUrl: './services-two.component.html',
  styleUrl: './services-two.component.scss'
})
export class ServicesTwoComponent {

  public nav_data = [
    {
      id: 'responsive',
      title: 'Responsive Design',
      active: true
    },
    {
      id: 'speed',
      title: 'Speed Optimized'
    },
    {
      id: 'framework',
      title: 'Innovative Framework'
    },
    {
      id: 'pixel',
      title: 'Pixel Perfect'
    },
  ];

  public tab_items = [
    {
      id: 'responsive',
      service_items: [
        {
          bg: '/assets/img/services/overlay/services-overlay-1.jpg',
          title: 'Responsive Design',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.',
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-2.jpg',
          title: 'Speed Optimized',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-3.jpg',
          title: 'Innovative Framework',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-4.jpg',
          title: 'Pixel Perfect',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        }
      ],
      active: true
    },
    {
      id: 'speed',
      service_items: [
        {
          bg: '/assets/img/services/overlay/services-overlay-1.jpg',
          title: 'Responsive Design',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.',
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-2.jpg',
          title: 'Speed Optimized',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-3.jpg',
          title: 'Innovative Framework',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-4.jpg',
          title: 'Pixel Perfect',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        }
      ],
    },
    {
      id: 'framework',
      service_items: [
        {
          bg: '/assets/img/services/overlay/services-overlay-1.jpg',
          title: 'Responsive Design',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.',
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-2.jpg',
          title: 'Speed Optimized',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-3.jpg',
          title: 'Innovative Framework',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-4.jpg',
          title: 'Pixel Perfect',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        }
      ],
    },
    {
      id: 'pixel',
      service_items: [
        {
          bg: '/assets/img/services/overlay/services-overlay-1.jpg',
          title: 'Responsive Design',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.',
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-2.jpg',
          title: 'Speed Optimized',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-3.jpg',
          title: 'Innovative Framework',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        },
        {
          bg: '/assets/img/services/overlay/services-overlay-4.jpg',
          title: 'Pixel Perfect',
          subtitle: 'We are a creative company that focuses on establishing long <br> term relationships with customers.'
        }
      ],
    }
  ]
}
