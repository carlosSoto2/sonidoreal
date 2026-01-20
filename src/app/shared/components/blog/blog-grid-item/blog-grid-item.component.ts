import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

// import { IBlogDT } from '../../../types/blog-d-t';

import { Post } from '../../../../core/models/post.model';
import { PostService } from '../../../../core/services/post.service';







@Component({
  selector: 'app-blog-grid-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-grid-item.component.html',
  styleUrl: './blog-grid-item.component.scss'
})
export class BlogGridItemComponent implements OnInit {

  @Input() cls: string = '';


  public posts: any;
  // @Input() posts!: IPost;
  // @Input() blog!: IBlogDT;
     constructor( private activatedRoute: ActivatedRoute,  private router: Router, public postService:PostService) {}





     ngOnInit(): void {

      this.loadPosts();

     }



       loadPosts() {
               this.postService.loadPosts()
                 .subscribe((posts: Post) => {
                   this.posts = posts;
                   console.log('blog-grid',this.posts);

                 });
             }


             loadPostsById(id: string){
               this.postService.loadPostsById(id)
               .subscribe((post:any)=>{
                 this.posts =post;
               })
             }

}
