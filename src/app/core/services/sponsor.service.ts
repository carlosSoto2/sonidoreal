import { Injectable, NgZone } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { Sponsor } from '../models/sponsor.model';
import { environment } from '../../../environments/environment';
const base_url=environment.base_url

@Injectable({
  providedIn: 'root'
})
export class SponsorService {



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

  loadSponsor(){
    const url = `${base_url}sponsor`;
    return this.http.get(url)
    .pipe(
      map((resp:{ok: boolean, sponsors: Sponsor})=>resp.sponsors
      )
    )
  }

  loadSponsorById(id: string){
    const url = `${base_url}sponsor/${id}`;
    return this.http.get(url)
    .pipe(
      map((resp:{ok: boolean, sponsor: Sponsor})=>resp.sponsor)
    )

  }


  }
