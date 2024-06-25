import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './event-area-one.component.html',
  styleUrl: './event-area-one.component.scss'
})
export class EventAreaOneComponent {

  public event_data = [
    {
      id:1,
      title:'UX Design Conference',
      speakers:[
        '/assets/img/event/event-speaker-1.jpg',
        '/assets/img/event/event-speaker-2.jpg',
      ],
      date:'October 16, 2023',
    },
    {
      id:2,
      title:'Business Development',
      speakers:[
        '/assets/img/event/event-speaker-3.jpg',
        '/assets/img/event/event-speaker-4.jpg',
      ],
      date:'November 20, 2023',
    },
    {
      id:3,
      title:'Networking and Data Science',
      speakers:[
        '/assets/img/event/event-speaker-5.jpg',
        '/assets/img/event/event-speaker-6.jpg',
      ],
      date:'December 15, 2023',
    },
    {
      id:4,
      title:'Digital Marketing',
      speakers:[
        '/assets/img/event/event-speaker-7.jpg',
        '/assets/img/event/event-speaker-8.jpg',
      ],
      date:'January 12, 2024',
    },
    {
      id:5,
      title:'Digital Marketing',
      speakers:[
        '/assets/img/event/event-speaker-7.jpg',
        '/assets/img/event/event-speaker-8.jpg',
      ],
      date:'January 12, 2024',
    },
    {
      id:6,
      title:'Webinar for Developers',
      speakers:[
        '/assets/img/event/event-speaker-9.jpg',
        '/assets/img/event/event-speaker-10.jpg',
      ],
      date:'January 28, 2024',
    },
  ]
}
