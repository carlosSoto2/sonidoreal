import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-agency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-agency.component.html',
  styleUrl: './pricing-agency.component.scss'
})
export class PricingAgencyComponent {

  // data
public pricing_data = [
  {
    id: "nav-monthly",
    active: false,
    pricing_items: [
      {
        icon: '/assets/img/price/5/price-icon-1.png',
        price: 0,
        price_text: "free",
        text: "Perfect Plan for Starters.",
        tag: "Starter",
        feature_text: "Includes:",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
        ],
      },
      {
        has_popular: true,
        icon: '/assets/img/price/5/price-icon-2.png',
        price: 150,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
          "Customer Managemet",
        ],
      },
      {
        icon: '/assets/img/price/5/price-icon-3.png',
        price: 220,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "User provisioning (SCIM)",
          "Databases with rich property types",
          "Custom guest editors",
          "24 hour support",
          "Customer Managemet",
        ],
      },
    ],
  },
  {
    id: "nav-yearly",
    active: true,
    pricing_items: [
      {
        icon: '/assets/img/price/5/price-icon-1.png',
        price: 0,
        price_text: "free",
        text: "Perfect Plan for Starters.",
        tag: "Starter",
        feature_text: "Includes:",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
        ],
      },
      {
        has_popular: true,
        icon: '/assets/img/price/5/price-icon-2.png',
        price: 198,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "Full Access Library",
          "Business & Financ Analysing",
          "Exclusive Templates",
          "24 hour support",
          "Customer Managemet",
        ],
      },
      {
        icon: '/assets/img/price/5/price-icon-3.png',
        price: 298,
        price_text: "month",
        text: "Collaborate Professionally.",
        tag: "Commercial",
        feature_text: "Everything in Personal Plan, plus",
        lists: [
          "User provisioning (SCIM)",
          "Databases with rich property types",
          "Custom guest editors",
          "24 hour support",
          "Customer Managemet",
        ],
      },
    ],
  },
];
}
