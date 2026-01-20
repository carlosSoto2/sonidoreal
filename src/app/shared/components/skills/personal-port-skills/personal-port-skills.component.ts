import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-port-skills',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './personal-port-skills.component.html',
  styleUrl: './personal-port-skills.component.scss'
})
export class PersonalPortSkillsComponent {

  skill_data = [
    { icon: '/assets/img/skill/9/skill-icon-1.png', title: "Figma", num: 90, text: "%" },
    { icon: '/assets/img/skill/9/skill-icon-2.png', title: "XD", num: 66, text: "%" },
    { icon: '/assets/img/skill/9/skill-icon-3.png', title: "Photoshop", num: 80, text: "%" },
    { icon: '/assets/img/skill/9/skill-icon-4.png', title: "Sketch", num: 86, text: "%" },
  ];

  // career_data
  career_data = [
    {
      icon: '/assets/img/skill/company/9/company-icon-1.png',
      title: "Product designer",
      designation: "Microsoft Edge",
      year: "April 2020 - Present",
    },
    {
      icon: '/assets/img/skill/company/9/company-icon-2.png',
      title: "UX/UX designer",
      designation: "Amazon Inc",
      year: "April 2016 - March 2020",
    },
    {
      icon: '/assets/img/skill/company/9/company-icon-3.png',
      title: "Product designer",
      designation: "Google",
      year: "April 2012 - March 2016",
    },
    {
      icon: '/assets/img/skill/company/9/company-icon-4.png',
      title: "UI Designer",
      designation: "Dribbble",
      year: "April 2008 - March 2012",
    },
  ];

}
