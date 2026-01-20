import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountdownTimerComponent } from '../../shared/components/countdown-timer/countdown-timer.component';
import { OffcanvasSixComponent } from '../../shared/components/offcanvas/offcanvas-six/offcanvas-six.component';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule,RouterModule,CountdownTimerComponent,OffcanvasSixComponent],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {

  constructor(public utilsService: UtilsService) {};
}
