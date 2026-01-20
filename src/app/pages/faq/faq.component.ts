import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,HeaderOneComponent,FooterSixComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  tab_faqs = [
    {
      id: "general",
      active: true,
      faq_content: [
        {
          id: "general",
          title: "Orders <br>& Shipping",
          accordions: [
            {
              id: "One",
              title: "Global search engine optimization",
              show: true,
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-1_accordion",
            },
            {
              id: "Two",
              title: " Complete Social Media Integration",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-1_accordion",
            },
            {
              id: "Three",
              title: "Branding Strategy for startups",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-1_accordion",
            },
            {
              id: "four",
              title: "How long do I get support & updates?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-1_accordion",
            },
          ]
        },
        {
          id: "general",
          title: "Returns <br>& Exchanges",
          accordions: [
            {
              id: "five",
              title: "How do I know my package has shipped?",
              show: true,
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-2_accordion",
            },
            {
              id: "six",
              title:
                "Why are certain products unavailable to ship to Internationally?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-2_accordion",
            },
            {
              id: "seven",
              title: "Why is my tracking number not updating?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-2_accordion",
            },
          ]
        },
        {
          id: "general",
          title: "Discounts",
          accordions: [
            {
              id: "eight",
              title: "How do I know my package has shipped?",
              show: true,
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-3_accordion",
            },
            {
              id: "nine",
              title:
                "Why are certain products unavailable to ship to Internationally?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-3_accordion",
            },
            {
              id: "ten",
              title: "Why is my tracking number not updating?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "general-3_accordion",
            },
          ]
        },
      ],
    },
    {
      id: "community",
      faq_content: [
        {
          id: "community",
          title: "Returns <br>& Exchanges",
          accordions: [
            {
              id: "eleven",
              title: "Can I cancel my account at any time?",
              show: true,
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "community-1_accordion",
            },
            {
              id: "twelve",
              title: "What happens after the license expires?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "community-1_accordion",
            },
            {
              id: "thirteen",
              title: "Does Harry have any documentations?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "community-1_accordion",
            },
            {
              id: "fourteen",
              title: "How long do I get support & updates?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "community-1_accordion",
            },
          ]
        },
      ],
    },
    {
      id: "support",
      faq_content: [
        {
          id: "support",
          title: "Discounts",
          accordions: [
            {
              id: "fifteen",
              title: "Can I cancel my account at any time?",
              show: true,
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "support-1_accordion",
            },
            {
              id: "sixteen",
              title: "What happens after the license expires?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "support-1_accordion",
            },
            {
              id: "seventeen",
              title: "Does Harry have any documentations?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "support-1_accordion",
            },
            {
              id: "eighteen",
              title: "How long do I get support & updates?",
              desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
              parent: "support-1_accordion",
            },
          ]
        },
      ],
    },
  ]

}
