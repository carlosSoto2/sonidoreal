import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-freelancer-skills',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './freelancer-skills.component.html',
  styleUrl: './freelancer-skills.component.scss'
})
export class FreelancerSkillsComponent {

  // skill data
  skill_data = [
    {
      skill_items: [
        { icon: '/assets/img/skill/skill-icon-1.png', num: 98, text: "%" },
        { icon: '/assets/img/skill/skill-icon-2.png', num: 86, text: "%" },
      ],
    },
    {
      skill_items: [
        { icon: '/assets/img/skill/skill-icon-3.png', num: 92, text: "%" },
        { icon: '/assets/img/skill/skill-icon-4.png', num: 73, text: "%" },
        { icon: '/assets/img/skill/skill-icon-5.png', num: 65, text: "%" },
      ],
    },
    {
      skill_items: [
        { icon: '/assets/img/skill/skill-icon-6.png', num: 50, text: "%" },
        { icon: '/assets/img/skill/skill-icon-7.png', num: 67, text: "%" },
      ],
    },
  ];

  // career data
  career_data = [
    {
      delay: "150",
      icon: '/assets/img/skill/company/company-icon-1.png',
      title: "Amazon inc",
      designation: "Senior Product Designer",
      year: "April 2016 - March 2020",
    },
    {
      delay: "200",
      icon: '/assets/img/skill/company/company-icon-2.png',
      title: "Google",
      designation: "UI/UX Web Designer",
      year: "January 2018 - March 2019",
    },
    {
      delay: "250",
      icon: '/assets/img/skill/company/company-icon-3.png',
      title: "Apple",
      designation: "Internship Graphic designer",
      year: "April 2012 - March 2016",
    },
    {
      delay: "150",
      icon: '/assets/img/skill/company/company-icon-4.png',
      title: "Dribble",
      designation: "Ui Designer",
      year: "April 2008 - March 2012",
    },
  ];
}
