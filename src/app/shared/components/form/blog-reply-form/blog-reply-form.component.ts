import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-reply-form',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './blog-reply-form.component.html',
  styleUrl: './blog-reply-form.component.scss'
})
export class BlogReplyFormComponent {

  public blogReplyForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit () {
    this.blogReplyForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      website:new FormControl(null),
      message:new FormControl(null,Validators.required),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.blogReplyForm.valid) {
      console.log('blog-reply-form-value', this.blogReplyForm.value);
      alert(`Message sent successfully`);

      // Reset the form
      this.blogReplyForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
  }

  get name() { return this.blogReplyForm.get('name') }
  get email() { return this.blogReplyForm.get('email') }
  get website() { return this.blogReplyForm.get('website') }
  get message() { return this.blogReplyForm.get('message') }
}
