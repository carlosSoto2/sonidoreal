import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-area-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './event-area-two.component.html',
  styleUrl: './event-area-two.component.scss'
})
export class EventAreaTwoComponent {

  public event_data = [
    {
      id:1,
      img:'/assets/img/event/10/event-1.jpg',
      event_thumb_title:'Neal	Houston',
      event_thumb_subtitle:'City mayor',
      tag:'Conference',
      date:'July 17, 2022',
      title:'Cultural Festival & Concert',
      location:'42 nostrand ave, brooklyn. NY',
    },
    {
      id:2,
      img:'/assets/img/event/10/event-2.jpg',
      event_thumb_title:'Neal	Houston',
      event_thumb_subtitle:'City mayor',
      tag:'Tourist Guide',
      date:'July 18, 2022',
      title:'Rising stars obscure heirs reality',
      location:'45 nostrand ave, brooklyn. NY',
    },
    {
      id:3,
      img:'/assets/img/event/10/event-3.jpg',
      event_thumb_title:'Neal	Houston',
      event_thumb_subtitle:'City mayor',
      tag:'Celebration',
      date:'July 20, 2022',
      title:'BUILD architecture Awards',
      location:'48 nostrand ave, brooklyn. NY',
    }
  ]
}
