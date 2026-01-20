import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


import { Testimonial } from '../../../../core/models/testimonial.model';
import { TestimonialService } from '../../../../core/services/testimonial.service';


@Component({
  selector: 'app-testimonial-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-one.component.html',
  styleUrl: './testimonial-one.component.scss'
})
export class TestimonialOneComponent {

  public testimonials: any;

 constructor(private activatedRoute: ActivatedRoute,  private router: Router, public testimonialService:TestimonialService) {}





  brand_data = [
    '/assets/img/brand/brand-2.png',
    '/assets/img/brand/brand-3.png',
    '/assets/img/brand/brand-4.png',
    '/assets/img/brand/brand-5.png',
    '/assets/img/brand/brand-6.png',
    '/assets/img/brand/brand-3.png',
  ]
  ngOnInit (){
    // testimonial active
    new Swiper('.testimonial__slider-active', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".testimonial-slider-dot",
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        '1200': {
          slidesPerView: 1,
        },
        '992': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });

    // brand slider active
    new Swiper('.brand__slider-active', {
      slidesPerView: 5,
      spaceBetween: 0,
      pagination: {
        el: ".brand-slider-dot",
        clickable: true,
      },
      modules: [Pagination],
      breakpoints: {
        '1200': {
          slidesPerView: 5,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 2,
        },
      },
    });
  this.loadTestimonials();

        this.activatedRoute.params.subscribe(({id})=> this.loadTestimonialsById(id))
        // console.log(this.service_data);

      }

        loadTestimonials() {
          this.testimonialService.loadTestimonials()
            .subscribe((testimonials: Testimonial) => {
              this.testimonials = testimonials;
              // console.log('servicio',this.testimonials);

            });
        }


        loadTestimonialsById(id: string){
          this.testimonialService.loadTestimonialsById(id)
          .subscribe((testimonial:any)=>{
            this.testimonials =testimonial;
          })
        }

}
