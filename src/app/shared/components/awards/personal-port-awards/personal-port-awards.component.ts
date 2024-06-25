import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-port-awards',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './personal-port-awards.component.html',
  styleUrl: './personal-port-awards.component.scss'
})
export class PersonalPortAwardsComponent {

  @Input() spacing:string = "pt-120 pb-10";
  @Input() is_center:boolean = false;
  constructor(public utilsService:UtilsService) { };

  // data
  public award_data = [
    {
      id: "one",
      topic: "Art direction 2023",
      title: "Modern painting award jump",
      data_src: '/assets/img/award/9/award-1.jpg',
      subtitle: "Runner Up - “ Decor of the week “",
    },
    {
      id: "two",
      topic: "Main Developer 2022",
      title: "People's choice: best design",
      data_src: '/assets/img/award/9/award-2.jpg',
      subtitle: "Runner Up - “ Decor of the week “",
    },
    {
      id: "three",
      topic: "Art direction 2023",
      title: "Webby's, Site of the Year",
      data_src: '/assets/img/award/9/award-3.jpg',
      subtitle: "Runner Up - “ Decor of the week “",
    },
    {
      id: "four",
      topic: "CSS Design 2018",
      title: "Awwwards site of the day",
      data_src: '/assets/img/award/9/award-4.jpg',
      subtitle: "Runner Up - “ Decor of the week “",
    },
  ]
}
