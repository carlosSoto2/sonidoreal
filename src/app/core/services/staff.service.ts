import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


import { Staff } from '../models/staff.model';

import { environment } from '../../../environments/environment';



const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class StaffService {


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

    loadStaffs(){
      const url = `${base_url}staff`;
      return this.http.get(url)
      .pipe(
        map((resp:{ok: boolean, staffs: Staff})=>resp.staffs)
      )
    }


    loadStaffbyId(id: string){
      const url = `${base_url}staff/${id}`;
      return this.http.get(url)
      .pipe(
        map((resp:{ok: boolean, staff: Staff})=>resp.staff)
      )
    }



}
