import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-area-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-area-four.component.html',
  styleUrl: './service-area-four.component.scss'
})
export class ServiceAreaFourComponent {

  public serviceActive = 'services-img-3';

  // services lists
  public services_lists = [
    { id: 1, title: "Event Shoot" },
    { id: 2, title: "Product Shoot" },
    { id: 3, title: "Wedding Shoot" },
    { id: 4, title: "Corporate Shoot" },
    { id: 5, title: "Pet Shoot" },
    { id: 6, title: "Advertisement shoot" },
    { id: 7, title: "Model Shoot" },
    { id: 8, title: "View all Type" },
  ];

  // handleServiceActive
   handleServiceActive (id:number) {
    this.serviceActive = `services-img-${id}`;
  }
}
