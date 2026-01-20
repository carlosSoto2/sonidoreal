import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';


import { Service } from '../models/service.model';

import { environment } from '../../../environments/environment';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

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

  loadServices(){
    const url = `${base_url}services`;
    return this.http.get(url)
    .pipe(
      map((resp:{ok: boolean, services: Service})=>resp.services)
    )
  }


  loadServicesById(id: string){
    const url = `${base_url}services/${id}`;
    return this.http.get(url)
    .pipe(
      map((resp:{ok: boolean, service: Service})=>resp.service)
    )
  }




}
