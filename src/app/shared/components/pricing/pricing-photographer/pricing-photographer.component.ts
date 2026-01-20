import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing-photographer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pricing-photographer.component.html',
  styleUrl: './pricing-photographer.component.scss'
})
export class PricingPhotographerComponent {

  // pricing data
  pricing_data = [
    {
      category: "Basic",
      category_class: "",
      price: "169",
      features: [
        {
          position: "left",
          lists: [
            { denied: false, list: "1-4 persons" },
            { denied: false, list: "24 hours turnaround" },
          ],
        },
        {
          position: "right",
          lists: [
            { denied: true, list: "Photo shoot session" },
            { denied: true, list: "All photos delivered on usb" },
          ],
        },
      ],
    },
    {
      category: "Standard",
      category_class: "standard",
      price: "253",
      features: [
        {
          position: "left",
          lists: [
            { denied: false, list: "1-4 persons" },
            { denied: false, list: "24 hours turnaround" },
          ],
        },
        {
          position: "right",
          lists: [
            { denied: false, list: "Photo shoot session" },
            { denied: true, list: "All photos delivered on usb" },
          ],
        },
      ],
    },
    {
      category: "Premium",
      category_class: "premium",
      price: "364",
      features: [
        {
          position: "left",
          lists: [
            { denied: false, list: "1-4 persons" },
            { denied: false, list: "24 hours turnaround" },
          ],
        },
        {
          position: "right",
          lists: [
            { denied: false, list: "Photo shoot session" },
            { denied: false, list: "All photos delivered on usb" },
          ],
        },
      ],
    },
  ]
}
