import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


import { Contact } from '../models/contact.model';

import { environment } from '../../../environments/environment';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ContactService {


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

loadContact(){
  const url = `${base_url}contact`;

  return this.http.get(url)
  .pipe(
    map((resp:{ok: boolean, contacts: Contact})=>resp.contacts
    )
  )


}

loadContactById(id: string){

  const url = `${base_url}contact/${id}`;
  return this.http.get(url)
  .pipe(
    map((resp:{ok: boolean, contact: Contact})=>resp.contact)
  )

}

// createContact(formData: ContactForm){
//   const url = `${base_url}contact`;
//   return this.http.post(url,formData, this.headers);

// }


// updateContact(contact: Contact){
//   const url = `${base_url}contact/${contact._id}`;
//   return this.http.put(url, contact, this.headers)

// }

// deleteContact( _id: string ) {
//   const url = `${ base_url }contact/${ _id }`;
//   return this.http.delete( url, this.headers );
// }



}
