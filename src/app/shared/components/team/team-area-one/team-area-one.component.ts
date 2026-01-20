import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import team_data from '../../../data/team-data';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


import { StaffService } from '../../../../core/services/staff.service';
import { Staff } from '../../../../core/models/staff.model';

@Component({
  selector: 'app-team-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team-area-one.component.html',
  styleUrl: './team-area-one.component.scss'
})
export class TeamAreaOneComponent {

  public staffs: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public staffService: StaffService ) {

  }

  @Input() style_2: boolean = false;

  @Input() spacing: string = 'pt-115';

  public teams = [...team_data].filter(t => t.page.includes('home_main'));

  ngOnInit(): void {
    new Swiper('.team__slider-active', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".team-slider-dot",
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
    this.loadStaffs();

    this.activatedRoute.params.subscribe(({id})=> this.loadStaffsById(id))


  }

    loadStaffs() {
      this.staffService.loadStaffs()
        .subscribe((staffs: Staff) => {
          this.staffs = staffs;
          // console.log(this.staffs);
        });
    }


    loadStaffsById(id: string){
      this.staffService.loadStaffbyId(id)
      .subscribe((staff:any)=>{
        this.staffs =staff;
      })
    }




}
