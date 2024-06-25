import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-area-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-area-one.component.html',
  styleUrl: './faq-area-one.component.scss'
})
export class FaqAreaOneComponent {

  faq_items = [
    {
      id: "one",
      title: "Can I cancel my account at any time?",
      show: true,
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    },
    {
      id: "two",
      title: "What happens after the license expires?",
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    },
    {
      id: "three",
      title: "Does Harry have any documentations?",
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    },
    {
      id: "four",
      title: "How long do I get support & updates?",
      desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
    },
  ]
}
