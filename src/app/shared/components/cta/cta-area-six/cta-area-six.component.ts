import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoPopupComponent } from '../../modal/video-popup/video-popup.component';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-cta-area-six',
  standalone: true,
  imports: [CommonModule,VideoPopupComponent],
  templateUrl: './cta-area-six.component.html',
  styleUrl: './cta-area-six.component.scss'
})
export class CtaAreaSixComponent {

  constructor(public utilsService:UtilsService) {};

}
