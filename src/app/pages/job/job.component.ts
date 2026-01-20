import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';
import sal from 'sal.js';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


import { GuideService } from '../../core/services/guide.service';
import { Guide } from '../../core/models/guide.model';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderOneComponent,FooterSixComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent implements OnInit{


  public guides: any;

   constructor( private activatedRoute: ActivatedRoute,  private router: Router, public guideService:GuideService) {}

  public job_data = [
    {
      id:1,
      title:'UX & UI Designer',
      time:'Full-Time',
      location:'Hawthorne, CA, United states',
      category:'Design',
      date:'10 Jun, 2024',
      vacancy:2,
    },
    {
      id:2,
      title:'Javascript Developer',
      time:'Full-Time',
      location:'Hawthorne, CA, United states',
      category:'Developer',
      date:'5 May, 2024',
      vacancy:5,
    },
    {
      id:3,
      title:'Sales lead, Human Spaceflight',
      time:'Full-Time',
      location:'Hawthorne, CA, United states',
      category:'Sales',
      date:'15 Feb, 2024',
      vacancy:3,
    },
    {
      id:4,
      title:'WordPress Developer',
      time:'Full-Time',
      location:'Hawthorne, CA, United states',
      category:'Developer',
      date:'15 Jan, 2024',
      vacancy:4,
    }
  ];

  ngOnInit(): void {
    this.loadGuides();

    this.activatedRoute.params.subscribe(({id})=> this.loadGuidesById(id))
    // console.log(this.service_data);

  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }


  loadGuides() {
          this.guideService.loadGuides()
            .subscribe((guides: Guide) => {
              this.guides = guides;
              // console.log('Programacion',this.guides);

            });
        }


        loadGuidesById(id: string){
          this.guideService.loadGuidesById(id)
          .subscribe((guide:any)=>{
            this.guides =guide;
          })
        }

}
