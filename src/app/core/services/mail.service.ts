import { HttpClient } from '@angular/common/http';



import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


import { Mail } from '../models/mail.model';

import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MailService {

mail: Mail;

  constructor(public http: HttpClient) { }

  sendMail(mail: Mail) {
    const url = `${base_url}mail`;

    return this.http.post(url, mail)
    .pipe(
      map((resp: any ) => {
      return resp.ok;
    })
    );
 }

}
