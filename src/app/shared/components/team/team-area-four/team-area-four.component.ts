import { Component } from '@angular/core';
import team_data from '../../../data/team-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-area-four',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-four.component.html',
  styleUrl: './team-area-four.component.scss'
})
export class TeamAreaFourComponent {

  public team_data = [...team_data].filter(t => t.page.includes('home_architecture'));
}
