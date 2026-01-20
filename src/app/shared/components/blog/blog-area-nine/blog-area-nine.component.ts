import { Component } from '@angular/core';
import blog_data from '../../../data/blog-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-area-nine',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-nine.component.html',
  styleUrl: './blog-area-nine.component.scss'
})
export class BlogAreaNineComponent {

  public blog_items = [...blog_data].filter(b => b.page === 'home_politician');

  first_blog = this.blog_items[0];
  middle_blog = this.blog_items[1];
  sm_blogs = this.blog_items.filter(b => b !== this.first_blog && b !== this.middle_blog);
}
