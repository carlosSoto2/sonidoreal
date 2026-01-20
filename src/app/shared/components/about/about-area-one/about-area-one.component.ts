import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { About } from '../../../../core/models/about.model';
import { AboutService } from '../../../../core/services/about.service';



@Component({
  selector: 'app-about-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './about-area-one.component.html',
  styleUrl: './about-area-one.component.scss'
})
export class AboutAreaOneComponent implements OnInit {


  public abouts: any;

  constructor( private activatedRoute: ActivatedRoute,  private router: Router, public aboutService:AboutService) { };

  ngOnInit(): void {

    //load Abouts
    this.loadAbouts();
  }

 loadAbouts() {
      this.aboutService.loadAbouts()
        .subscribe((abouts: About) => {
          this.abouts = abouts;
        });
    }



}
