import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import team_data from '../../../data/team-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-area-three',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-three.component.html',
  styleUrl: './team-area-three.component.scss'
})
export class TeamAreaThreeComponent {

  public teams = [...team_data].filter(t => t.page.includes('home_creative'));
}
