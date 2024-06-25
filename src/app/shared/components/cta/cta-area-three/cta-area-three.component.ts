import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-area-three',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cta-area-three.component.html',
  styleUrl: './cta-area-three.component.scss'
})
export class CtaAreaThreeComponent {
  @Input() style_2: boolean = false;
}
