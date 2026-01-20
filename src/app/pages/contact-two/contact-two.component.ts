import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';




import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { ContactFormComponent } from '../../shared/components/form/contact-form/contact-form.component';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";



import { Contact } from '../../core/models/contact.model';
import { ContactService } from '../../core/services/contact.service';

import { Mail } from '../../core/models/mail.model';
import { MailService } from '../../core/services/mail.service';



@Component({
  selector: 'app-contact-two',
  standalone: true,
  imports: [CommonModule, HeaderOneComponent, ContactFormComponent,  FooterOneComponent],
  templateUrl: './contact-two.component.html',
  styleUrl: './contact-two.component.scss'
})
export class ContactTwoComponent implements OnInit{

  public contacts: Contact;
  // public pointsales: any;



mail =new Mail('','','');

  public contactForm = this.fb.group({
    subject: new FormControl( ['', [Validators.required, Validators.minLength(4)]]),
    name: ['', [Validators.required, Validators.minLength(3)]],
    mail: ['', Validators.required, Validators.email],
    text: ['', [Validators.required, Validators.minLength(8)]],

  });

constructor(   public contactService: ContactService, private activatedRoute: ActivatedRoute,  private router: Router, private fb: FormBuilder, public mailService: MailService  ) { }

ngOnInit(): void {
  this.loadContact();
}


loadContact(){
  this.contactService.loadContact().subscribe((contacts: Contact)=> {
    this.contacts =contacts;
    // console.log(contacts);

  })
}

//   sendMail(): void{

//     this.mailService.sendMail(this.contactForm.value)
//     .subscribe(
//       resp=>
//       {

//         Swal.fire({

//           icon: 'success',
//           title: 'Su correo has sido enviado',
//           showConfirmButton: false,
//           timer: 1500
//         })

//       }
//     )
//     this.contactForm.reset();
// }


  public location_data = [
    {
      title:'Santo Domingo, Republica Dominicana',
      icon:`/assets/img/contact/contact-location-1.png`,
      location:'contact.location&#64;website.co',
      tel:'686-324-6838',
    }
  ];
}
