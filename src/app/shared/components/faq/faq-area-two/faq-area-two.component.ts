import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-area-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-area-two.component.html',
  styleUrl: './faq-area-two.component.scss'
})
export class FaqAreaTwoComponent {

  public faq_data = [
    {
      id: 'nav-general',
      isActive: true,
      faq_items: [
        {
          id: "one",
          title: "Global search engine optimization",
          show: true,
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
        {
          id: "two",
          title: "Complete Social Media Integration",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
        {
          id: "three",
          title: "Branding Strategy for startups",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
        {
          id: "four",
          title: "How long do I get support & updates?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
      ]
    },
    {
      id: 'nav-community',
      isActive: false,
      faq_items: [
        {
          id: "five",
          title: "What kind of marketing efforts do you specialize in?",
          show: true,
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
        {
          id: "six",
          title: "What is video marketing and why do I need it?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
        {
          id: "seven",
          title: "Does my business really need digital marketing?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
        {
          id: "eight",
          title: "Do you offer startup packages?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
      ]
    },
    {
      id: 'nav-support',
      isActive: false,
      faq_items: [
        {
          id: "nine",
          title: "Who is the typical Curious client?",
          show: true,
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders"
        },
        {
          id: "ten",
          title: "What are your typical timelines?",
          desc: "A startup or start-up is started by individual farmers or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual farmers"
        },
        {
          id: "eleven",
          title: "Do you offer flexible payment terms?",
          desc: "A startup or start-up is started by individual farmers or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual farmers"
        },
        {
          id: "twelve",
          title: "Do you trade services for equity?",
          desc: "A startup or start-up is started by individual farmers or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual farmers"
        },
      ]
    }
  ]
}
