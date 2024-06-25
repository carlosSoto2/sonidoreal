import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderOneComponent } from '../../shared/header/header-one/header-one.component';
import { FooterOneComponent } from '../../shared/footer/footer-one/footer-one.component';
import { BlogGridItemComponent } from '../../shared/components/blog/blog-grid-item/blog-grid-item.component';
import { BlogReplyFormComponent } from '../../shared/components/form/blog-reply-form/blog-reply-form.component';
import { IBlogDT } from '../../shared/types/blog-d-t';
import { UtilsService } from '../../shared/services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-details-two',
  standalone: true,
  imports: [CommonModule,RouterModule, HeaderOneComponent, BlogGridItemComponent, BlogReplyFormComponent, FooterOneComponent],
  templateUrl: './blog-details-two.component.html',
  styleUrl: './blog-details-two.component.scss'
})
export class BlogDetailsTwoComponent {

  public related_blogs: IBlogDT[] = [];

  constructor(private utilsService: UtilsService) { };

  ngOnInit() {
    this.utilsService.filterBlogs().subscribe((response) => {
      this.related_blogs = response.filter((b) => b.page === 'blog_grid').slice(0, 3);
    });
  }

}
