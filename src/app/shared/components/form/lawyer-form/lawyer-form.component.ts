import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-lawyer-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './lawyer-form.component.html',
  styleUrl: './lawyer-form.component.scss'
})
export class LawyerFormComponent {

  public contactForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.contactForm = new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      phone:new FormControl(null,Validators.required),
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

  get firstName() { return this.contactForm.get('firstName') }
  get lastName() { return this.contactForm.get('lastName') }
  get email() { return this.contactForm.get('email') }
  get phone() { return this.contactForm.get('phone') }
  get message() { return this.contactForm.get('message') }

}
