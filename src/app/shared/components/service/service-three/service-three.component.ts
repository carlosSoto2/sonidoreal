import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-three',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './service-three.component.html',
  styleUrl: './service-three.component.scss'
})
export class ServiceThreeComponent {

  public service_data = [
    {
      id:1,
      img:'/assets/img/services/5/services-1.png',
      title:'Strategy & Research.',
      subtitle:'Our design services starts and ends best in class experience.',
    },
    {
      id:2,
      img:'/assets/img/services/5/services-2.png',
      title:'UI/UX Analysis',
      subtitle:'Our design services starts and ends best in class experience.',
    },
    {
      id:3,
      img:'/assets/img/services/5/services-3.png',
      title:'Search Optimization',
      subtitle:'Our design services starts and ends best in class experience.',
    }
  ]
}
