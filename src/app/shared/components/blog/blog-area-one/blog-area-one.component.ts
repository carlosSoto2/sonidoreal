import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import blog_data from '../../../data/blog-data';

import { Post } from '../../../../core/models/post.model';
import { PostService } from '../../../../core/services/post.service';



@Component({
  selector: 'app-blog-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-one.component.html',
  styleUrl: './blog-area-one.component.scss'
})
export class BlogAreaOneComponent implements OnInit {

  public posts: any;



    constructor(private activatedRoute: ActivatedRoute,  private router: Router, public postService:PostService) {}

  public blog_items = [...blog_data].filter(b => b.page === 'home_main');


  ngOnInit(): void {

    this.loadPosts();

          this.activatedRoute.params.subscribe(({id})=> this.loadPostsById(id))
          // console.log(this.service_data);

        }

          loadPosts() {
            this.postService.loadPosts()
              .subscribe((posts: Post) => {
                this.posts = posts;
                // console.log('servicio',this.posts);

              });
          }


          loadPostsById(id: string){
            this.postService.loadPostsById(id)
            .subscribe((post:any)=>{
              this.posts =post;
            })
          }


}
