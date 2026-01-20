import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-area-eight',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './service-area-eight.component.html',
  styleUrl: './service-area-eight.component.scss'
})
export class ServiceAreaEightComponent {

  public service_data = [
    {
      icon:`/assets/img/icon/services/8/services-1.svg`,
      title:'Planning',
      subtitle:'There are many variations of passages of lorem Ipsum available.!',
      projects:350,
    },
    {
      icon:`/assets/img/icon/services/8/services-2.svg`,
      title:'Architecture',
      subtitle:'There are many variations of passages of lorem Ipsum available.!',
      projects:120,
    },
    {
      icon:`/assets/img/icon/services/8/services-3.svg`,
      title:'Design',
      subtitle:'There are many variations of passages of lorem Ipsum available.!',
      projects:240,
    },
    {
      icon:`/assets/img/icon/services/8/services-4.svg`,
      title:'Products',
      subtitle:'There are many variations of passages of lorem Ipsum available.!',
      projects:220,
    }
  ]
}
