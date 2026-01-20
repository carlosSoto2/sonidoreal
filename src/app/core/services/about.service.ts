import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


import { About } from '../models/about.model';

import { environment } from '../../../environments/environment';
const base_url = environment.base_url;




@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone)
  { }


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

  loadAbouts(){
    const url = `${base_url}about`;
    return this.http.get(url)
    .pipe(
      map((resp:{ok: boolean, abouts: About})=>resp.abouts)
    )
  }

}
