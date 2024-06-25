import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import team_data from '../../shared/data/team-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-classic',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,FooterSixComponent],
  templateUrl: './team-classic.component.html',
  styleUrl: './team-classic.component.scss'
})
export class TeamClassicComponent {

  public team_data = [...team_data].filter(t => t.page.includes('team'));
}
