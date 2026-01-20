import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonalPortFormComponent } from '../../form/personal-port-form/personal-port-form.component';

@Component({
  selector: 'app-personal-port-contact',
  standalone: true,
  imports: [CommonModule,PersonalPortFormComponent],
  templateUrl: './personal-port-contact.component.html',
  styleUrl: './personal-port-contact.component.scss'
})
export class PersonalPortContactComponent {

}
