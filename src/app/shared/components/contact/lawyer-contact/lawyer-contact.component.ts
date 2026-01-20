import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LawyerFormComponent } from '../../form/lawyer-form/lawyer-form.component';

@Component({
  selector: 'app-lawyer-contact',
  standalone: true,
  imports: [CommonModule,LawyerFormComponent],
  templateUrl: './lawyer-contact.component.html',
  styleUrl: './lawyer-contact.component.scss'
})
export class LawyerContactComponent {

}
