import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agency-award',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agency-award.component.html',
  styleUrl: './agency-award.component.scss'
})
export class AgencyAwardComponent {

  public award_data = [
    {
      icon: '/assets/img/award/5/award-1.png',
      title: "2 x Pencils",
      subtitle: "Best Branded Editorial Experience",
      bg: "",
    },
    {
      icon: '/assets/img/award/5/award-2.png',
      title: "Creative Review Annual",
      subtitle: "Best Branded Editorial Experience",
      bg: "award__brown",
    },
    {
      icon: '/assets/img/award/5/award-3.png',
      title: "Webby Award",
      subtitle: "Best Branded Editorial Experience",
      bg: "award__purple",
    },
  ]

}
