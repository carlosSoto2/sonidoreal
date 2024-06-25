import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-architecture-awrads',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './architecture-awrads.component.html',
  styleUrl: './architecture-awrads.component.scss'
})
export class ArchitectureAwradsComponent {

  public award_data = [
    {
      year:'2023',
      icon:'/assets/img/award/8/award-1.png',
      title:'Red dot design Award',
      subtitle:'Daniel Villa, Romania'
    },
    {
      year:'2022',
      icon:'/assets/img/award/8/award-2.png',
      title:'AAG winner 2022',
      subtitle:'Canbin wood in Forest'
    },
    {
      year:'2024',
      icon:'/assets/img/award/8/award-3.png',
      title:'BUILD architecture Awards',
      subtitle:'Architect Thiago Alcantara'
    },
    {
      year:'2021',
      icon:'/assets/img/award/8/award-4.png',
      title:'Art of year 2021',
      subtitle:'Daniel Villa, Romania'
    },
  ]
}
