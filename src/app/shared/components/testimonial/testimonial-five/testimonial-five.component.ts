import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testimonial-five',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './testimonial-five.component.html',
  styleUrl: './testimonial-five.component.scss'
})
export class TestimonialFiveComponent {

  public testimonial_data = [
    {
      name: 'Douglas Lyphe',
      designation: 'Director at Kickstarter.',
      avater: '/assets/img/users/user-10.jpg',
      comment: '“Working with Photo X was amazing”',
      desc:'Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis'
    },
    {
      name: 'Karen Hills',
      designation: 'Fashion Designer',
      avater: '/assets/img/users/user-9.jpg',
      comment: '“The services is awesome”',
      desc:'Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis',
      spacing:'mb-30'
    },
    {
      name: 'Jake Weary',
      designation: 'Fashion Designer',
      avater: '/assets/img/users/user-8.jpg',
      comment: "“I'm very happy to work with them”",
      desc:'Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis'
    },
  ]
}
