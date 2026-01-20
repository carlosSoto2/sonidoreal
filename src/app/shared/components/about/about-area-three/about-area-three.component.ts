import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoPopupComponent } from '../../modal/video-popup/video-popup.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-about-area-three',
  standalone: true,
  imports: [CommonModule,RouterModule,VideoPopupComponent],
  templateUrl: './about-area-three.component.html',
  styleUrl: './about-area-three.component.scss'
})
export class AboutAreaThreeComponent {

  constructor(public utilsService:UtilsService) {}
}
