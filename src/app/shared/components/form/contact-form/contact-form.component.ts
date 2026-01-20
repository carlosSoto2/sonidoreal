import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators, FormBuilder } from '@angular/forms';
import { ContactService } from '../../../../core/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../../../../core/services/mail.service';
import { Contact } from '../../../../core/models/contact.model';
import { Mail } from '../../../../core/models/mail.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {




    public contacts: Contact;
    // public pointsales: any;



  mail =new Mail('','','');

    public contactForm = this.fb.group({
      subject: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', Validators.required, Validators.email],
      text: ['', [Validators.required, Validators.minLength(8)]],

    });


  public formSubmitted = false;


constructor(   public contactService: ContactService, private activatedRoute: ActivatedRoute,  private router: Router, private fb: FormBuilder, public mailService: MailService  ) { }


  ngOnInit () {

  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log('contact-form-value', this.contactForm.value);
      alert(`Message sent successfully`);

      // Reset the form
      this.contactForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
    console.log('contact-form', this.contactForm);
  }

  sendMail(): void{

    this.mailService.sendMail(this.contactForm.value)
    .subscribe(
      resp=>
      {

        Swal.fire({

          icon: 'success',
          title: 'Su correo has sido enviado',
          showConfirmButton: false,
          timer: 1500
        })

      }
    )
    this.contactForm.reset();
}


}
