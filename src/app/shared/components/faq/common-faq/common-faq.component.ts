import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-common-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-faq.component.html',
  styleUrl: './common-faq.component.scss'
})
export class CommonFaqComponent {

  @Input() spacing = 'pb-115';

  tab_faqs = [
    {
      id: "nav-general",
      active: true,
      faq_items: [
        {
          id: "general-one",
          title: "Global search engine optimization",
          show: true,
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-general_accordion",
        },
        {
          id: "general-two",
          title: " Complete Social Media Integration",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-general_accordion",
        },
        {
          id: "general-three",
          title: "Branding Strategy for startups",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-general_accordion",
        },
        {
          id: "general-four",
          title: "How long do I get support & updates?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-general_accordion",
        },
      ]
    },
    {
      id: "nav-community",
      faq_items: [
        {
          id: "community-five",
          title: "Can I cancel my account at any time?",
          show: true,
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-community_accordion",
        },
        {
          id: "community-six",
          title: "What happens after the license expires?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-community_accordion",
        },
        {
          id: "community-seven",
          title: "Does Harry have any documentations?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-community_accordion",
        },
        {
          id: "community-eight",
          title: "How long do I get support & updates?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-community_accordion",
        },
      ]
    },
    {
      id: "nav-support",
      faq_items: [
        {
          id: "support-nine",
          title: "Can I cancel my account at any time?",
          show: true,
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-support_accordion",
        },
        {
          id: "support-ten",
          title: "What happens after the license expires?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-support_accordion",
        },
        {
          id: "support-eleven",
          title: "Does Harry have any documentations?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-support_accordion",
        },
        {
          id: "support-twelve",
          title: "How long do I get support & updates?",
          desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
          parent: "nav-support_accordion",
        },
      ]
    },
  ]
}
