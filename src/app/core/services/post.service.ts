import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';

import { Post } from '../models/post.model';



import { environment } from '../../../environments/environment';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PostService {


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

   loadPosts(){
     const url = `${base_url}post`;
     return this.http.get(url)
     .pipe(
       map((resp:{ok: boolean, posts: Post})=>resp.posts)
     )
   }


   loadPostsById(id: string){
     const url = `${base_url}post/${id}`;
     return this.http.get(url)
     .pipe(
       map((resp:{ok: boolean, post: Post})=>resp.post)
     )
   }




 }
