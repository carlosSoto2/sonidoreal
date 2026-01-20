import { Component } from '@angular/core';
import blog_data from '../../../data/blog-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-area-seven',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-seven.component.html',
  styleUrl: './blog-area-seven.component.scss'
})
export class BlogAreaSevenComponent {

  public blog_items = [...blog_data].filter(b => b.page === 'home_portfolio');
}
