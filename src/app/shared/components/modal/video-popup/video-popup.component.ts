import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-video-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-popup.component.html',
  styleUrl: './video-popup.component.scss'
})
export class VideoPopupComponent {

  constructor(public utilsService: UtilsService){}

}
