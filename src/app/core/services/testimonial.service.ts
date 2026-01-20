import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';


import { Testimonial } from '../models/testimonial.model';


import { environment } from '../../../environments/environment';
const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

   constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) { }


 get token(): string {
   return localStorage.getItem('token') || '';
 }

 get headers() {
   return {
     headers: {
       'x-token': this.token
     }
   }
 }

   loadTestimonials(){
     const url = `${base_url}testimonial`;
     return this.http.get(url)
     .pipe(
       map((resp:{ok: boolean, testimonials: Testimonial})=>resp.testimonials)
     )
   }


   loadTestimonialsById(id: string){
     const url = `${base_url}testimonial/${id}`;
     return this.http.get(url)
     .pipe(
       map((resp:{ok: boolean, testimonial: Testimonial})=>resp.testimonial)
     )
   }




 }
