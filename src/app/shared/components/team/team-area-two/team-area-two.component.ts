import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import team_data from '../../../data/team-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-area-two',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-two.component.html',
  styleUrl: './team-area-two.component.scss'
})
export class TeamAreaTwoComponent {
  public teams = [...team_data].filter(t => t.page.includes('home_lawyer'));
}
