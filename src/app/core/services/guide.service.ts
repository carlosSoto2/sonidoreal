import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


import { Guide } from '../models/guide.model';


import { environment } from '../../../environments/environment';

const base_url=environment.base_url;




@Injectable({
  providedIn: 'root'
})
export class GuideService {



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


  loadGuides(){
    const url = `${base_url}guide`;
    return this.http.get(url)
    .pipe(
      map((resp:{ok: boolean, guides: Guide})=>resp.guides)
    )
  }


  loadGuidesById(id: string){
    const url = `${base_url}guide/${id}`;
    return this.http.get(url)
    .pipe(
      map((resp:{ok: boolean, guide: Guide})=>resp.guide)
    )
  }

  // createGuide(formData: GuideForm){
  //   const url = `${base_url}guide`;
  //   return this.http.post(url,formData, this.headers);
  // }


  // updateGuide(guide: Guide){
  //   const url = `${base_url}guide/${guide._id}`;
  //   return this.http.put(url, guide, this.headers)
  // }

  // deleteGuide( _id: string ) {
  //   const url = `${ base_url }guide/${ _id }`;
  //   return this.http.delete( url, this.headers );
  // }



}
