import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { ContactFormComponent } from '../../shared/components/form/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,HeaderOneComponent,ContactFormComponent,FooterSixComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  public location_data = [
    {
      title:'Australia Office',
      icon:`/assets/img/contact/contact-location-1.png`,
      location:'contact.location&#64;website.co',
      tel:'686-324-6838',
    },
    {
      title:'San Francisco Office',
      icon:`/assets/img/contact/contact-location-2.png`,
      location:'contact.location&#64;website.co',
      tel:'686-324-7893',
    },
    {
      title:'Egpyt Office',
      icon:`/assets/img/contact/contact-location-3.png`,
      location:'contact.location&#64;website.co',
      tel:'686-324-7888',
    }
  ];


}
