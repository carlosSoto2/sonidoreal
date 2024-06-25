import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import sal from 'sal.js';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [CommonModule,HeaderOneComponent,FooterSixComponent],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss'
})
export class TeamDetailsComponent {

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }

}
