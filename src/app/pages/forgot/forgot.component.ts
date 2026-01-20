import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import { FormsModule,ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule,HeaderOneComponent,FooterSixComponent],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {

  public forgotForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.forgotForm = new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email])
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.forgotForm.valid) {
      console.log('forgot-form-value', this.forgotForm.value);
      alert(`Message sent successfully`);

      // Reset the form
      this.forgotForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
  }

  get email() { return this.forgotForm.get('email') }

}
