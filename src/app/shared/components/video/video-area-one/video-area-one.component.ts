import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoPopupComponent } from '../../modal/video-popup/video-popup.component';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-video-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule,VideoPopupComponent],
  templateUrl: './video-area-one.component.html',
  styleUrl: './video-area-one.component.scss'
})
export class VideoAreaOneComponent {

  constructor(public utilsService: UtilsService){};
}
