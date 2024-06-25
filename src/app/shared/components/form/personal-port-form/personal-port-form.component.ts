import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-port-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './personal-port-form.component.html',
  styleUrl: './personal-port-form.component.scss'
})
export class PersonalPortFormComponent {

  public contactForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.contactForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      phone:new FormControl(null,Validators.required),
      subject:new FormControl(null,Validators.required),
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
  get subject() { return this.contactForm.get('subject') }
  get message() { return this.contactForm.get('message') }
}
