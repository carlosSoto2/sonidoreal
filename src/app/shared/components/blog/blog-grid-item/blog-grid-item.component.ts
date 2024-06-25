import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBlogDT } from '../../../types/blog-d-t';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-grid-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-grid-item.component.html',
  styleUrl: './blog-grid-item.component.scss'
})
export class BlogGridItemComponent {

  @Input() cls: string = '';
  @Input() blog!: IBlogDT;
}
