import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-area-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-area-two.component.html',
  styleUrl: './counter-area-two.component.scss'
})
export class CounterAreaTwoComponent {

  counter_data = [
    { number: 726, text: '+', title: 'Successfully' },
    { number: 426, text: 'K', title: 'Happy Clients' },
    { number: 176, text: '+', title: 'Indictment' },
    { number: 1074, text: '+', title: 'Lawsuits' },
  ]

}
