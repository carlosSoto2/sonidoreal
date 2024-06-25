import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  public contactForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.contactForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      phone:new FormControl(null,Validators.required),
      company:new FormControl(null,Validators.required),
      message:new FormControl(null,Validators.required),
    })
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

  get name() { return this.contactForm.get('name') }
  get email() { return this.contactForm.get('email') }
  get phone() { return this.contactForm.get('phone') }
  get company() { return this.contactForm.get('company') }
  get message() { return this.contactForm.get('message') }
}
