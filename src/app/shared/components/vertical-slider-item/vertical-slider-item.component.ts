import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vertical-slider-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-slider-item.component.html',
  styleUrl: './vertical-slider-item.component.scss'
})
export class VerticalSliderItemComponent {

  @Input() title: string = '';
}
