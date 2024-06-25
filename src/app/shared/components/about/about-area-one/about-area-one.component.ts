import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './about-area-one.component.html',
  styleUrl: './about-area-one.component.scss'
})
export class AboutAreaOneComponent {

}
