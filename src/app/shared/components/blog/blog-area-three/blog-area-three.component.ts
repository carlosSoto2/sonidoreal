import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import blog_data from '../../../data/blog-data';

@Component({
  selector: 'app-blog-area-three',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-three.component.html',
  styleUrl: './blog-area-three.component.scss'
})
export class BlogAreaThreeComponent {
  public blog_items = [...blog_data].filter(b => b.page === 'home_freelancer');
}
