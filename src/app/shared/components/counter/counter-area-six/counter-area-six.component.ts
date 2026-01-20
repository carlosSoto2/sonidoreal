import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-area-six',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-area-six.component.html',
  styleUrl: './counter-area-six.component.scss'
})
export class CounterAreaSixComponent {

  public counter_data = [
    {
      num: 623,
      text: "k",
      title: "People lived in our city",
    },
    {
      num: 1820,
      text: "+",
      title: "Square kilometers region covers",
    },
    {
      num: 24,
      text: "%",
      title: "Private & domestic garden land",
    },
  ]
}
