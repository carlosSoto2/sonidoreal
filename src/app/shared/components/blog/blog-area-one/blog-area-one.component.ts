import { Component } from '@angular/core';
import blog_data from '../../../data/blog-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-area-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-one.component.html',
  styleUrl: './blog-area-one.component.scss'
})
export class BlogAreaOneComponent {
  public blog_items = [...blog_data].filter(b => b.page === 'home_main');
}
