import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-support-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './support-area-one.component.html',
  styleUrl: './support-area-one.component.scss'
})
export class SupportAreaOneComponent {

}
