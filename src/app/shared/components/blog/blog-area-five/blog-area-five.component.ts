import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import blog_data from '../../../data/blog-data';

@Component({
  selector: 'app-blog-area-five',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-five.component.html',
  styleUrl: './blog-area-five.component.scss'
})
export class BlogAreaFiveComponent {
  public blog_items = [...blog_data].filter(b => b.page === 'home_start_up');
}
