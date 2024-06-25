import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import blog_data from '../../../data/blog-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-area-four',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-area-four.component.html',
  styleUrl: './blog-area-four.component.scss'
})
export class BlogAreaFourComponent {
  public blog_items = [...blog_data].filter(b => b.page === 'home_agency');
}
