import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-sidebar.component.html',
  styleUrl: './blog-sidebar.component.scss'
})
export class BlogSidebarComponent {

  @Input() top_cls: string = 'pl-40';
}
