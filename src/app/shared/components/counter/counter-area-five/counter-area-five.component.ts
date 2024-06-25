import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-area-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-area-five.component.html',
  styleUrl: './counter-area-five.component.scss'
})
export class CounterAreaFiveComponent {

  counter_data = [
    {
      num: 99,
      text: "%",
      title: "Satisfaction <br /> Clients",
    },
    {
      num: 246,
      text: "",
      title:"Employees On <br /> Worldwide",
    },
    {
      num: 1824,
      text: "",
      title:"Project Completed <br /> On 40 Countries",
    },
  ]
}
