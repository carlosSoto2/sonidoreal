import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-search-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-popup.component.html',
  styleUrl: './search-popup.component.scss'
})
export class SearchPopupComponent {

  constructor(public utilsService:UtilsService) {};
}
